/**
 * Firestore security rules test harness.
 *
 * Evaluates firestore.rules against Googles firebaserules test API instead of
 * the local emulator, so no JVM is required. It authenticates with the existing
 * `firebase login` session and only ever *evaluates* rules - nothing is written
 * to the database.
 *
 *   npm run test:rules
 *
 * Exits non-zero on the first failing category of:
 *   1. structure   - a match block lost its allow clauses
 *   2. unknown     - a call to a function the rules language does not have
 *   3. behaviour   - valid input rejected, or invalid input accepted
 *
 * The behaviour cases are deliberately two-sided. A "fix" that simply returns
 * true would satisfy every positive case while silently disabling the PII
 * guards, so the negative cases carry most of the weight.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RULES_PATH = path.join(ROOT, 'firestore.rules');
const PROJECT = process.env.FIREBASE_PROJECT_ID || 'atlantix2k26';
const ENDPOINT = `https://firebaserules.googleapis.com/v1/projects/${PROJECT}:test`;
const PROBE_PATH = '/databases/(default)/documents/probe/x';

// --------------------------------------------------------------------------
// credentials
// --------------------------------------------------------------------------

function fail(msg) {
  console.error(`\n${msg}\n`);
  process.exit(1);
}

/** The public desktop OAuth client that ships inside firebase-tools. */
function firebaseClient() {
  if (process.env.FIREBASE_CLIENT_ID && process.env.FIREBASE_CLIENT_SECRET) {
    return {
      client_id: process.env.FIREBASE_CLIENT_ID,
      client_secret: process.env.FIREBASE_CLIENT_SECRET,
    };
  }
  const api = path.join(ROOT, 'node_modules', 'firebase-tools', 'lib', 'api.js');
  if (!fs.existsSync(api)) {
    fail(
      'Could not find firebase-tools.\n' +
        'Run `npm install`, or set FIREBASE_CLIENT_ID and FIREBASE_CLIENT_SECRET.',
    );
  }
  const src = fs.readFileSync(api, 'utf8');
  const id = src.match(/envOverride\("FIREBASE_CLIENT_ID",\s*"([^"]+)"\)/);
  const secret = src.match(/envOverride\("FIREBASE_CLIENT_SECRET",\s*"([^"]+)"\)/);
  if (!id || !secret) {
    fail(
      'Could not read the OAuth client out of firebase-tools/lib/api.js.\n' +
        'Set FIREBASE_CLIENT_ID and FIREBASE_CLIENT_SECRET instead.',
    );
  }
  return { client_id: id[1], client_secret: secret[1] };
}

function tokenStorePath() {
  const candidates = [
    path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json'),
    path.join(process.env.APPDATA || '', 'configstore', 'firebase-tools.json'),
  ];
  const found = candidates.find((p) => p && fs.existsSync(p));
  if (!found) {
    fail('No firebase-tools login found.\nRun `npx firebase login` first.');
  }
  return found;
}

async function accessToken() {
  const store = JSON.parse(fs.readFileSync(tokenStorePath(), 'utf8'));
  const tok = store.tokens;
  if (!tok) fail('firebase-tools login has no tokens.\nRun `npx firebase login` first.');

  if (Date.now() < tok.expires_at - 60_000) return tok.access_token;

  const { client_id, client_secret } = firebaseClient();
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: tok.refresh_token,
      client_id,
      client_secret,
    }),
  });
  const body = await res.json();
  if (!body.access_token) {
    fail(`Could not refresh the firebase login: ${body.error || res.status}\nRun \`npx firebase login\`.`);
  }
  return body.access_token;
}

// --------------------------------------------------------------------------
// fixture builders - these mirror src/services/team.ts and registration.ts
// --------------------------------------------------------------------------

const kv = (o) => Object.entries(o).map(([k, v]) => `'${k}':'${v}'`).join(',');

const member = (o = {}) =>
  `{${kv({
    uid: o.uid ?? 'a',
    displayName: o.displayName ?? 'A',
    email: o.email ?? 'a@b.com',
    phone: o.phone ?? '1',
    branch: o.branch ?? 'C',
    college: o.college ?? 'P',
    department: o.department ?? 'C',
    year: o.year ?? '3',
    dob: o.dob ?? 'd',
    diet: o.diet ?? 'veg',
    role: o.role ?? 'leader',
    joinedAt: o.joinedAt ?? 'x',
  })}${o.extra ? `,${o.extra}` : ''}}`;

const regMember = (o = {}) =>
  `{${kv({
    name: o.name ?? 'A',
    email: o.email ?? 'a@b.com',
    phone: o.phone ?? '1',
    branch: o.branch ?? 'C',
    college: o.college ?? 'P',
    dob: o.dob ?? 'd',
    year: o.year ?? '3',
    diet: o.diet ?? 'veg',
    memberId: o.memberId ?? 'm1',
  })},'checkedIn':${o.checkedIn ?? false}${o.extra ? `,${o.extra}` : ''}}`;

const roster = (n) =>
  `[${Array.from({ length: n }, (_, i) => member({ uid: String.fromCharCode(97 + i) })).join(',')}]`;

const team = (membersList, o = {}) =>
  `{'teamCode':'AB-2345','teamName':'T','leader':{'uid':'a','displayName':'A','email':'a@b.com'},` +
  `'members':${membersList},'selectedTechEventId':'','selectedNonTechEventId':'','status':'${o.status ?? 'forming'}',` +
  `'registrationId':null,'maxMembers':${o.maxMembers ?? 4},'createdAt':'x','updatedAt':'y'}`;

// --------------------------------------------------------------------------
// behaviour cases
// --------------------------------------------------------------------------

const CASES = [
  // ---- validMembersList / validTeam : accepted ----
  ['validMembersList, single leader', `validMembersList([${member()}])`, true],
  ['validMembersList, team of four', `validMembersList(${roster(4)})`, true],
  ['validTeam, complete document', `validTeam(${team(roster(1))})`, true],
  ['validLeader, well formed', `validLeader({'uid':'a','displayName':'A','email':'a@b.com'})`, true],

  // ---- validMembersList / validTeam : rejected ----
  ['invalid role in slot 1', `validMembersList([${member({ role: 'HACKER' })}])`, false],
  ['invalid role in slot 3', `validMembersList([${member()},${member({ uid: 'b' })},${member({ uid: 'c' })},${member({ uid: 'd', role: 'root' })}])`, false],
  ['invalid role in the last occupied slot', `validMembersList([${member()},${member({ uid: 'b' })},${member({ uid: 'c', role: 'HACKER' })}])`, false],
  ['invalid diet', `validMembersList([${member()},${member({ uid: 'b', diet: 'raw' })}])`, false],
  ['smuggled extra field on a member', `validMembersList([${member({ extra: "'isAdmin':true" })}])`, false],
  ['five members, over the cap', `validMembersList(${roster(5)})`, false],
  ['empty member list', `validMembersList([])`, false],
  ['validTeam with a bad member', `validTeam(${team(`[${member({ role: 'HACKER' })}]`)})`, false],
  ['validTeam with an off-enum status', `validTeam(${team(roster(1), { status: 'hacked' })})`, false],
  ['validTeam with maxMembers above the cap', `validTeam(${team(roster(1), { maxMembers: 9 })})`, false],

  // ---- validRegMembers ----
  ['validRegMembers, single row', `validRegMembers([${regMember()}])`, true],
  ['validRegMembers, four rows', `validRegMembers([${regMember()},${regMember({ memberId: 'm2' })},${regMember({ memberId: 'm3' })},${regMember({ memberId: 'm4' })}])`, true],
  ['validRegMembers, smuggled extra field', `validRegMembers([${regMember({ extra: "'role':'admin'" })}])`, false],
  ['validRegMembers, five rows', `validRegMembers([${regMember()},${regMember({ memberId: 'm2' })},${regMember({ memberId: 'm3' })},${regMember({ memberId: 'm4' })},${regMember({ memberId: 'm5' })}])`, false],

  // ---- samePrefix: the join path must not rewrite the existing roster ----
  ['samePrefix, joiner leaves the roster intact', `samePrefix([${member()}], [${member()},${member({ uid: 'b', role: 'member' })}], 0) && samePrefix([${member()}], [${member()},${member({ uid: 'b', role: 'member' })}], 1)`, true],
  ['samePrefix, full three-member prefix', `samePrefix(${roster(3)}, ${roster(4)}, 2)`, true],
  ['samePrefix, leader phone rewritten', `samePrefix([${member()}], [${member({ phone: '999' })},${member({ uid: 'b' })}], 0)`, false],
  ['samePrefix, existing member swapped out', `samePrefix([${member()},${member({ uid: 'b' })}], [${member()},${member({ uid: 'z' })}], 1)`, false],

  // ---- memberEmailIs / uncheckedMemberIsMe: isRegistrationOwner + create ----
  ['memberEmailIs, caller in slot 1', `memberEmailIs([${member()}], 0)`, true],
  ['memberEmailIs, caller in the last slot', `memberEmailIs([${member({ uid: 'x' })},${member({ uid: 'y' })},${member({ uid: 'z' })},${member({ uid: 'w', email: 'a@b.com' })}], 3)`, true],
  ['memberEmailIs, caller absent', `memberEmailIs([${member({ email: 'z@b.com' })}], 0)`, false],
  ['memberEmailIs, index past the end', `memberEmailIs([${member()}], 2)`, false],
  ['uncheckedMemberIsMe, not yet checked in', `uncheckedMemberIsMe([{'email':'a@b.com','checkedIn':false}], 0)`, true],
  ['uncheckedMemberIsMe, already checked in', `uncheckedMemberIsMe([{'email':'a@b.com','checkedIn':true}], 0)`, false],
  ['uncheckedMemberIsMe, different member', `uncheckedMemberIsMe([{'email':'z@b.com','checkedIn':false}], 0)`, false],

  // ---- sameIdentity: check-in may move checkedIn and nothing else ----
  ['sameIdentity, only checkedIn moved', `sameIdentity([${regMember({ checkedIn: true })}], [${regMember()}], 0)`, true],
  ['sameIdentity, email swapped', `sameIdentity([${regMember({ checkedIn: true, email: 'evil@x.com' })}], [${regMember()}], 0)`, false],
  ['sameIdentity, name swapped', `sameIdentity([${regMember({ checkedIn: true, name: 'Eve' })}], [${regMember()}], 0)`, false],
  ['sameIdentity, memberId swapped', `sameIdentity([${regMember({ checkedIn: true, memberId: 'mX' })}], [${regMember()}], 0)`, false],
];

// --------------------------------------------------------------------------
// structural expectations - a match block silently losing an allow clause
// compiles cleanly and passes every behavioural case, so assert shape too.
// --------------------------------------------------------------------------

const STRUCTURE = [
  ['/users/{uid}', ['allow get:', 'allow list:', 'allow create:', 'allow update:', 'allow delete:']],
  ['/teams/{teamId}', ['allow get:', 'allow list:', 'allow create:', 'allow update:', 'allow delete:']],
  ['/registrations/{regId}', ['allow read:', 'allow create:', 'allow update:', 'allow delete:']],
  ['/siteContent/{docId}', ['allow read:', 'allow write:']],
];

/** Returns the body of a `match <path> {` block by brace matching. */
function blockBody(src, matchPath) {
  // Anchor on the trailing " {" so the wildcard braces in the path
  // (match /users/{uid} {) are not mistaken for the block opening.
  const start = src.indexOf(`match ${matchPath} {`);
  if (start === -1) return null;
  let depth = 0;
  for (let i = start + `match ${matchPath} {`.length - 1; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

function checkStructure(rules) {
  const results = [];
  for (const [matchPath, clauses] of STRUCTURE) {
    const body = blockBody(rules, matchPath);
    if (!body) {
      results.push([false, `${matchPath} exists`, 'no such match block']);
      continue;
    }
    results.push([true, `${matchPath} exists`, '']);
    for (const clause of clauses) {
      results.push([body.includes(clause), `${matchPath} has "${clause}"`, 'clause missing from block']);
    }
  }
  results.push([
    rules.includes('match /{document=**}'),
    'default deny block present',
    'no catch-all deny found',
  ]);
  return results;
}

// --------------------------------------------------------------------------
// runner
// --------------------------------------------------------------------------

/** Inject a read-only probe that evaluates `expr`, leaving the file otherwise intact. */
function withProbe(rules, expr) {
  const anchor = 'match /{document=**}';
  const at = rules.lastIndexOf(anchor);
  if (at === -1) throw new Error('could not find the default-deny block to insert a probe into');
  return rules.slice(0, at) + `match /probe/{id} {\n      allow read: if ${expr};\n    }\n\n    ` + rules.slice(at);
}

async function evaluate(token, rules, expr) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: { files: [{ name: 'firestore.rules', content: rules }] },
      // Always expect ALLOW: SUCCESS then means the request really was allowed.
      testSuite: {
        testCases: [
          {
            expectation: 'ALLOW',
            request: { auth: { uid: 'A', token: { email: 'a@b.com' } }, path: PROBE_PATH, method: 'get' },
          },
        ],
      },
    }),
  });
  if (!res.ok) {
    fail(`Rules API returned ${res.status} for project "${PROJECT}".\n${(await res.text()).slice(0, 400)}`);
  }
  const body = await res.json();
  return {
    allowed: body.testResults?.[0]?.state === 'SUCCESS',
    debug: body.testResults?.[0]?.debugMessages || [],
    unknown: (body.issues || []).filter((i) => /Invalid function name/.test(i.description)),
  };
}

function report(title, results) {
  console.log(`\n${title}`);
  for (const [ok, label, detail] of results) {
    console.log(`  ${ok ? 'pass' : 'FAIL'}  ${label}${ok || !detail ? '' : `  (${detail})`}`);
  }
  return results.every(([ok]) => ok);
}

async function main() {
  if (!fs.existsSync(RULES_PATH)) fail(`No rules file at ${RULES_PATH}`);
  const rules = fs.readFileSync(RULES_PATH, 'utf8');
  const token = await accessToken();

  console.log(`firestore.rules  ${rules.split('\n').length} lines`);
  console.log(`project         ${PROJECT}`);

  const structureOk = report('structure', checkStructure(rules));

  console.log('\nbehaviour');
  const behaviour = [];
  const unknownCalls = new Map();
  for (const [label, expr, expectAllow] of CASES) {
    const out = await evaluate(token, withProbe(rules, expr), expr);
    for (const issue of out.unknown) {
      if (!unknownCalls.has(issue.description)) unknownCalls.set(issue.description, label);
    }
    const ok = out.allowed === expectAllow;
    behaviour.push([ok, label, out.allowed ? 'allowed' : 'denied', out.debug, expectAllow]);
  }
  for (const [ok, label, got, debug, expectAllow] of behaviour) {
    console.log(`  ${ok ? 'pass' : 'FAIL'}  ${label}${ok ? '' : `  (expected ${expectAllow ? 'allow' : 'deny'}, got ${got})`}`);
    if (!ok) for (const d of debug) console.log(`          ${d}`);
  }
  const behaviourOk = behaviour.every(([ok]) => ok);

  const unknownOk = report('unknown functions', [...unknownCalls].map(([desc, where]) => [false, desc, `used by ${where}`]));

  const total = structureOk && behaviourOk && unknownOk;
  console.log(
    `\n${behaviour.filter(([ok]) => ok).length}/${behaviour.length} behaviour cases passed` +
      `, ${unknownCalls.size} unknown function(s)`,
  );
  console.log(total ? '\nPASS\n' : '\nFAIL\n');
  process.exit(total ? 0 : 1);
}

main();
