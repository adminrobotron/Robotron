import { EventItem } from '../types';

export const TECHNICAL_EVENTS: EventItem[] = [
  {
    id: 'tech-01',
    code: 'TECH-01',
    title: 'START UP',
    category: 'technical',
    description: 'Pitch a disruptive startup idea to a panel of investors and industry mentors.',
    fee: 50,
    feeText: 'bolt FEE: ₹50',
    iconName: 'Rocket',
    teamSize: '1 - 4 Members',
    rules: [
      'Teams get 5 minutes to pitch + 3 minutes Q&A.',
      'Pitch deck must cover problem, solution, market, and business model.',
      'A working prototype or live demo earns bonus points.',
      'Judged on innovation, feasibility, and scalability.'
    ],
    timing: 'Jan 15, 03:30 PM',
    venue: 'Innovation Lab'
  },
  {
    id: 'tech-02',
    code: 'TECH-02',
    title: 'LINE FOLLOWER ROBOT',
    category: 'technical',
    description: 'Build autonomous robots that can navigate predefined paths with precision.',
    fee: 50,
    feeText: 'bolt FEE: ₹50',
    iconName: 'Cpu',
    teamSize: '1 - 4 Members',
    rules: [
      'Maximum robot dimension: 25cm x 25cm x 25cm.',
      'Robot weight must not exceed 2.5 kg.',
      'Line width is 30mm black line on a white arena.',
      'Fastest accurate completion wins.'
    ],
    timing: 'Jan 15, 02:00 PM',
    venue: 'Robotics Arena 1'
  },
  {
    id: 'tech-03',
    code: 'TECH-03',
    title: 'CAD DESIGNING',
    category: 'technical',
    description: 'Create innovative 3D models and engineering designs for the future.',
    fee: 40,
    feeText: 'bolt FEE: ₹40',
    iconName: 'Box',
    teamSize: 'Individual',
    rules: [
      'Software allowed: SolidWorks, Fusion 360, AutoCAD, CATIA.',
      'Problem statement provided on spot.',
      'Time duration: 1.5 Hours.',
      'Judged on precision, stress distribution, and aesthetic functionality.'
    ],
    timing: 'Jan 15, 04:00 PM',
    venue: 'CAD Lab 204'
  },
  {
    id: 'tech-04',
    code: 'TECH-04',
    title: 'DRAG RACE',
    category: 'technical',
    description: 'Design and race high-speed remote-controlled vehicles on the strip.',
    fee: 60,
    feeText: 'bolt FEE: ₹60',
    iconName: 'Zap',
    teamSize: '2 - 4 Members',
    rules: [
      'Electric power source only (Max 24V).',
      'Both wired and wireless RC controllers allowed.',
      'Single drag strip length: 30 meters straight.',
      'Best time of 2 attempts qualifies for final knockout.'
    ],
    timing: 'Jan 16, 11:00 AM',
    venue: 'Outdoor Track Bay'
  },
  {
    id: 'tech-05',
    code: 'TECH-05',
    title: 'HACKATHON',
    category: 'technical',
    description: "South India's premier 24-hour coding marathon to build real-world solutions.",
    fee: 100,
    feeText: 'bolt FEE: ₹100',
    iconName: 'Code',
    teamSize: '2 - 4 Members',
    rules: [
      'Teams of 2-4 members with a 24-hour build window.',
      'Problem statements revealed at the opening ceremony.',
      'All code must be written during the event.',
      'Final submission includes repo link, demo video, and live pitch.'
    ],
    timing: 'Jan 15, 10:00 AM - Jan 16, 10:00 AM',
    venue: 'Main Hackathon Hall'
  },
  {
    id: 'tech-06',
    code: 'TECH-06',
    title: 'ROBO SOCCER',
    category: 'technical',
    description: 'Program robots to compete in an exciting and lethal soccer tournament.',
    fee: 70,
    feeText: 'bolt FEE: ₹70',
    iconName: 'Trophy',
    teamSize: '2 - 4 Members',
    rules: [
      '2 robots per team on field (1 Striker, 1 Defender/Goalie).',
      'Match duration: 3 mins per half.',
      'No physical destruction of opponent robots permitted.',
      'Standard tennis ball used as football.'
    ],
    timing: 'Jan 16, 01:00 PM',
    venue: 'Robotics Arena 2'
  },
  {
    id: 'tech-07',
    code: 'TECH-07',
    title: 'TECHNICAL QUIZ',
    category: 'technical',
    description: 'Test your deep-core knowledge in various technical domains.',
    fee: 25,
    feeText: 'bolt FEE: ₹25',
    iconName: 'HelpCircle',
    teamSize: '2 Members',
    rules: [
      'Round 1: Rapid Fire MCQ Screening.',
      'Round 2: Audio-Visual Engineering Identification.',
      'Round 3: High-stakes Buzzer Round.',
      'No gadgets or internet access permitted.'
    ],
    timing: 'Jan 15, 05:00 PM',
    venue: 'Main Auditorium'
  },
  {
    id: 'tech-08',
    code: 'TECH-08',
    title: 'CTF (CAPTURE THE FLAG)',
    category: 'technical',
    description: 'Brutal cybersecurity challenges, reverse engineering, and cryptographic puzzles.',
    fee: 45,
    feeText: 'bolt FEE: ₹45',
    iconName: 'Shield',
    teamSize: '1 - 3 Members',
    rules: [
      'Categories: Web Exploitation, Reverse Engineering, Cryptography, Forensics.',
      'Jeopardy-style scoring grid.',
      'Attacking the platform infrastructure results in instant DQ.',
      'Dynamic scoring enabled for top flags.'
    ],
    timing: 'Jan 15, 03:30 PM',
    venue: 'Cyber Lab 101'
  },
  {
    id: 'tech-09',
    code: 'TECH-09',
    title: 'PIT STOP CHALLENGE',
    category: 'technical',
    description: 'Fast-paced engineering challenges and soldering/circuit fixes under heavy time pressure.',
    fee: 55,
    feeText: 'bolt FEE: ₹55',
    iconName: 'Wrench',
    teamSize: '2 Members',
    rules: [
      'Assemble hardware components on PCB from given schematic.',
      'Debug intentional wiring errors within 20 minutes.',
      'Judged on speed, clean soldering joints, and output accuracy.'
    ],
    timing: 'Jan 16, 10:00 AM',
    venue: 'Hardware Workshop Bay'
  },
  {
    id: 'tech-10',
    code: 'TECH-10',
    title: 'CIRCUIT DEBUGGING',
    category: 'technical',
    description: 'Trace faults and repair defective circuits against the clock.',
    fee: 40,
    feeText: 'bolt FEE: ₹40',
    iconName: 'CircuitBoard',
    teamSize: '1 - 2 Members',
    rules: [
      'Faulty circuits are provided on the spot.',
      'Identify and fix all injected faults within 30 minutes.',
      'Only the provided multimeter and soldering kit may be used.',
      'Fewest errors and fastest valid repair wins.'
    ],
    timing: 'Jan 15, 02:00 PM',
    venue: 'Electronics Lab 105'
  }
];

export const CIVILIAN_EVENTS: EventItem[] = [
  {
    id: 'civilian-01',
    code: 'NON-01',
    title: 'FREE FIRE',
    category: 'civilian',
    description: 'Battle royale gaming tournament with pulse-pounding action and squad tactics.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Flame',
    teamSize: '4 Squad Members',
    rules: [
      'Map: Bermuda & Purgatory.',
      'Emulators strictly prohibited (Mobile phones only).',
      'Custom room code shared 10 mins prior.',
      'Point system based on placement + kills.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Esports Arena Hall B'
  },
  {
    id: 'civilian-02',
    code: 'NON-02',
    title: 'JUST A MINUTE',
    category: 'civilian',
    description: 'Rapid-fire wit, spontaneous impromptu speaking, and lightning-fast speech challenges.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Mic',
    teamSize: 'Individual',
    rules: [
      'Speak for 60 seconds without hesitation, repetition, or deviation.',
      'Challenged by opponents for grammatical or structural slips.',
      'Topic assigned 30 seconds prior.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Conference Room C'
  },
  {
    id: 'civilian-03',
    code: 'NON-03',
    title: '7TH SENSE',
    category: 'civilian',
    description: 'Intuition, spatial perception, and logic-based mind puzzles that defy reality.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Eye',
    teamSize: '2 Members',
    rules: [
      'Blindfolded tactile obstacle navigation.',
      'Acoustic signal pattern recognition.',
      'Decipher visual illusion matrixes.'
    ],
    timing: 'Jan 16, 11:30 AM',
    venue: 'Activity Room 102'
  },
  {
    id: 'civilian-04',
    code: 'NON-04',
    title: 'PAPER PYRAMID',
    category: 'civilian',
    description: 'Creative structural engineering challenge using minimal paper sheets and tape.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Layers',
    teamSize: '2 - 3 Members',
    rules: [
      'Materials provided: 20 A4 sheets, 1 meter masking tape.',
      'Structure must support a standard weight load.',
      'Tallest stable pyramid within 30 minutes wins.'
    ],
    timing: 'Jan 16, 12:30 PM',
    venue: 'Design Studio B'
  },
  {
    id: 'civilian-05',
    code: 'NON-05',
    title: 'ANIME QUIZ',
    category: 'civilian',
    description: 'The ultimate test for seasoned anime enthusiasts, manga readers, and Otaku.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Sparkles',
    teamSize: '1 - 2 Members',
    rules: [
      'Covers Shonen, Seinen, Classic & Modern Anime Series.',
      'Name the OST sound clip round included.',
      'No smartwatches or phone usage allowed during rounds.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Open Amphitheatre'
  },
  {
    id: 'civilian-06',
    code: 'NON-06',
    title: 'FIVE LEGS',
    category: 'civilian',
    description: 'Extreme physical team coordination, balancing, and problem-solving trials.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Users',
    teamSize: '4 Members',
    rules: [
      '4 team members must cross the finish line touching the ground with ONLY 5 legs combined.',
      'Failure to maintain rule during race incurs time penalty.',
      'Laughter guaranteed!'
    ],
    timing: 'Jan 16, 02:30 PM',
    venue: 'Campus Lawn Area'
  },
  {
    id: 'civilian-07',
    code: 'NON-07',
    title: 'PHOTOGRAPHY',
    category: 'civilian',
    description: 'Capture the most striking frames across the campus on a given theme.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Camera',
    teamSize: 'Individual',
    rules: [
      'Theme revealed at the start of the event.',
      'Photos must be shot during the event window only.',
      'Basic color correction allowed; heavy manipulation is not.',
      'Judged on composition, creativity, and storytelling.'
    ],
    timing: 'Jan 16, 10:30 AM',
    venue: 'Campus Grounds'
  },
  {
    id: 'civilian-08',
    code: 'NON-08',
    title: 'SPIN AROUND',
    category: 'civilian',
    description: 'A dizzying challenge combining balance, speed, and nerve.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'RefreshCw',
    teamSize: 'Individual',
    rules: [
      'Participants spin for a fixed duration before each task.',
      'Complete the obstacle course without losing balance.',
      'Falling or stepping out incurs a time penalty.',
      'Fastest clean run wins.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Open Amphitheatre'
  },
  {
    id: 'civilian-09',
    code: 'NON-09',
    title: 'BALLOON BLAST',
    category: 'civilian',
    description: 'Pop your way through a chaotic balloon battlefield.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'PartyPopper',
    teamSize: '2 Members',
    rules: [
      'Balloons are tied to the ankle of each participant.',
      "Protect your balloon while popping opponents'.",
      'Last participant with an intact balloon wins.',
      'No physical contact above the knee.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Student Activity Hub'
  },
  {
    id: 'civilian-10',
    code: 'NON-10',
    title: 'CHESS',
    category: 'civilian',
    description: 'Classic strategy showdown on the 64-square battlefield.',
    fee: 0,
    feeText: 'VERIFIED FEE: FREE',
    iconName: 'Crown',
    teamSize: 'Individual',
    rules: [
      'Swiss format with a 10+5 rapid time control.',
      'Touch-move rule strictly enforced.',
      'Draws resolved by tiebreak points.',
      'Phones and engines prohibited.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Conference Room C'
  }
];

export const ALL_EVENTS = [...TECHNICAL_EVENTS, ...CIVILIAN_EVENTS];
