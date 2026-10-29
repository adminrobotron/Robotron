import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { SiteContent, EventItem, SpecialAward } from '../types';
import { ALL_EVENTS } from '../data/events';

const CONTENT_DOC = 'siteContent/main';

const defaultEvents: EventItem[] = ALL_EVENTS;

const defaultContent: SiteContent = {
  hero: {
    badge: 'MISSION CRITICAL: JANUARY 15-16, 2026 • COIMBATORE',
    title: 'ROBOTRON SYMPOSIUM 2027',
    subtitle: '24 HOURS. INFINITE POSSIBILITIES. ASSEMBLE YOUR SQUAD AND EXECUTE THE PLAN.',
    date: 'JANUARY 15-16, 2026',
    venue: 'PARK COLLEGE OF ENGINEERING, COIMBATORE',
  },
  about: {
    heading: 'ABOUT ROBOTRON',
    cards: [
      { title: 'INNOVATION HUB', description: 'Join the most exciting hackathon in South India where brilliant minds come together to solve real-world problems through technology and creativity.' },
      { title: 'COMPETE & WIN', description: 'Compete for amazing prizes worth ₹50,000 while showcasing your technical skills in various categories from AI/ML to cybersecurity.' },
      { title: 'NETWORK & LEARN', description: 'Connect with industry experts, developers, mentors. Participate in workshops, tech talks, and gain valuable insights.' },
    ],
  },
  stats: {
    hours: '24',
    prizePool: '₹50K',
    events: '20',
  },
  schedule: {
    day1: [
      { time: '08:30 AM', title: 'REGISTRATION & WELCOME', description: 'Technical events check-in. Collect your badges and welcome kit at the main gate.' },
      { time: '09:30 AM', title: 'INAUGURATION & OPENING CEREMONY', description: 'Welcome address, event overview, and official opening of the ceremony.' },
      { time: '10:30 AM', title: 'TEA BREAK', description: 'Recharge with tea and snacks before the events begin.' },
      { time: '11:00 AM', title: 'TECHNICAL WORKSHOP & NON-TECHNICAL EVENTS', description: 'Technical events: hands-on workshop for registered participants. Non-technical events: Chess, Anime Quiz, Free Fire, Just A Minute, Balloon Blast, and Spin Around.' },
      { time: '01:00 PM', title: 'LUNCH BREAK', description: 'Break for lunch and regroup before the afternoon sessions.' },
      { time: '02:00 PM', title: 'LINE FOLLOWER ROBOT & CIRCUIT DEBUGGING', description: 'Technical events: Line Follower Robot and Circuit Debugging.' },
      { time: '03:30 PM', title: 'START UP & CTF', description: 'Technical events: Start Up pitch and Capture The Flag cybersecurity challenge.' },
    ],
    day2: [
      { time: '09:00 AM', title: 'PIT STOP CHALLENGE & NON-TECHNICAL EVENTS', description: 'Technical events: Pit Stop Challenge. Non-technical events: all non-technical events.' },
      { time: '10:00 AM', title: 'TEA BREAK', description: 'Recharge with tea and snacks before the next round of events.' },
      { time: '10:30 AM', title: 'DRAG RACE', description: 'Technical events: Drag Race on the outdoor strip.' },
      { time: '11:30 AM', title: 'PROJECT EXPO & TECHNICAL QUIZ', description: 'Technical events: Project Expo showcase and Technical Quiz.' },
      { time: '01:00 PM', title: 'LUNCH BREAK', description: 'Break for lunch and regroup before the final sessions.' },
      { time: '02:00 PM', title: 'ROBO SOCCER & PROJECT EXPO', description: 'Technical events: Robo Soccer and the Project Expo finals.' },
      { time: '03:30 PM', title: 'PRIZE DISTRIBUTION', description: 'Winners announced, trophies and cash prizes awarded, closing ceremony.', isHighlight: true },
    ],
  },
  events: {
    technical: defaultEvents.filter(e => e.category === 'technical'),
    civilian: defaultEvents.filter(e => e.category === 'civilian'),
  },
  prizes: {
    pool: '₹50,000',
    first: { title: 'ROBOTRON KING', amount: '₹25,000', perks: ['STARTUP INCUBATION SUPPORT', 'INDUSTRY MENTORSHIP', 'PRIME SHOWCASE SLOT'] },
    second: { title: 'RUNNER UP', amount: '₹15,000', perks: ['Tech Workshop Access', 'Exclusive Networking', 'Official Certificate'] },
    third: { title: 'BRONZE ELITE', amount: '₹10,000', perks: ['Sponsor Goodie Bag', 'Merit Certificate', 'Development Tools Access'] },
    special: [
      { title: 'MOST INNOVATIVE', reward: '₹5,000 + TROPHY', description: "For the team that pushes the boundaries of what's possible with a unique solution.", iconBg: 'bg-[#fddc00]', iconName: 'Lightbulb' },
      { title: 'TEAM SYNERGY', reward: '₹3,000 + CERTIFICATES', description: 'Recognizing outstanding collaboration, distributed workload, and cohesive execution.', iconBg: 'bg-[#3467ff]', iconName: 'Users' },
      { title: 'BEST UI/UX', reward: '₹2,000 + TOOLS', description: 'For excellence in interface aesthetics, user journey flow, and accessibility.', iconBg: 'bg-[#ff6584]', iconName: 'Palette' },
    ],
  },
  contact: {
    emails: ['hello@Robotron2027.com', 'support@Robotron2027.com'],
    phones: ['+91 98765 43210', '+91 87654 32109'],
    address: 'Park College of Engineering and Technology, Kaniyur, Coimbatore - 641659, Tamil Nadu, India',
  },
  footer: {
    brand: 'ROBOTRON 2027',
    tagline: '24 HOURS. INFINITE POSSIBILITIES.',
    copyright: '© 2027 ROBOTRON SYMPOSIUM. ASSEMBLE YOUR TEAM.',
  },
};

function deepMergeWithHealing(target: SiteContent, source: Partial<SiteContent>): SiteContent {
  const result = { ...target, ...source } as SiteContent;

  // Heal empty events arrays
  if (!result.events?.technical?.length && target.events?.technical?.length) {
    result.events = { ...result.events, technical: target.events.technical };
  }
  if (!result.events?.civilian?.length && target.events?.civilian?.length) {
    result.events = { ...result.events, civilian: target.events.civilian };
  }

  // Replace event lists that still contain retired events with the current roster.
  const RETIRED_EVENT_TITLES = ['PAPER PRESENTATION', 'MEME QUIZ', 'SILENT MUSIC'];
  const savedEvents = [...(result.events?.technical || []), ...(result.events?.civilian || [])];
  if (savedEvents.some(e => RETIRED_EVENT_TITLES.includes((e.title || '').trim().toUpperCase()))) {
    result.events = { technical: target.events.technical, civilian: target.events.civilian };
  }

  // Migrate legacy "Robotron Hackathon 2027" naming saved in Firestore.
  if (/^robotron hackathon 2027$/i.test((result.hero?.title || '').trim())) {
    result.hero = { ...result.hero, title: target.hero.title };
  }
  if (/robotron hackathon/i.test(result.footer?.copyright || '')) {
    result.footer = { ...result.footer, copyright: target.footer.copyright };
  }

  // Heal empty schedule arrays
  if (!result.schedule?.day1?.length && target.schedule?.day1?.length) {
    result.schedule = { ...result.schedule, day1: target.schedule.day1, day2: target.schedule.day2 };
  }

  // Heal empty prize perks
  (['first', 'second', 'third'] as const).forEach(r => {
    if (!result.prizes?.[r]?.perks?.length && target.prizes?.[r]?.perks?.length) {
      result.prizes = { ...result.prizes, [r]: { ...result.prizes![r], perks: target.prizes[r].perks } };
    }
  });
  if (!result.prizes?.special?.length && target.prizes?.special?.length) {
    result.prizes = { ...result.prizes, special: target.prizes.special };
  }

  return result;
}

export async function loadContent(): Promise<SiteContent> {
  try {
    const docRef = doc(db, CONTENT_DOC);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return deepMergeWithHealing(defaultContent, docSnap.data() as Partial<SiteContent>);
    }
    return defaultContent;
  } catch (err) {
    console.warn('Could not load content from Firestore, using defaults:', err);
    return defaultContent;
  }
}

export async function saveContent(content: SiteContent): Promise<void> {
  const docRef = doc(db, CONTENT_DOC);
  await setDoc(docRef, content);
}

export { defaultContent };
