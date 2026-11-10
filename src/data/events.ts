import { EventItem } from '../types';

export const TECHNICAL_EVENTS: EventItem[] = [
  {
    id: 'tech-01',
    code: 'TECH-01',
    title: 'START UP',
    category: 'technical',
    description: 'PowerPoint presentation event where students pitch innovative startup ideas, problem statements, and actionable solutions to a panel of judges.',
    fee: 50,
    feeText: '₹50 per member',
    iconName: 'Rocket',
    teamSize: 'Maximum 4 Members',
    rules: [
      'Format: PowerPoint Presentation (PPT).',
      'Slide Limit: Maximum 6 to 7 slides.',
      'Slide 1: Title Slide (Project/Startup Name, Team Details).',
      'Slide 2: Idea / Problem Statement Slide.',
      'Slides 3–6: Solution Slides covering technical architecture, working model, feasibility, and market impact.',
      'Final Slide: Conclusion Slide.',
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
    description: 'An autonomous robotics challenge where custom-built wheeled bots must accurately detect and follow a designated track from start to finish in the shortest possible time.',
    fee: 150,
    feeText: '₹150 per member',
    iconName: 'Cpu',
    teamSize: 'Maximum 3 Members',
    rules: [
      'Robot Type: Wheeled robot.',
      'Maximum Weight: 500 grams.',
      'Maximum Dimensions: 15 cm × 10 cm × 10 cm (Length × Breadth × Height).',
      'Registration Fee: ₹150 per member.'
    ],
    timing: 'Jan 15, 02:00 PM',
    venue: 'Robotics Arena 1'
  },
  {
    id: 'tech-03',
    code: 'TECH-03',
    title: 'CAD DESIGNING',
    category: 'technical',
    description: 'A 3D modeling competition testing speed, precision, and engineering creativity as participants draft mechanical components or assemblies using CAD software.',
    fee: 100,
    feeText: '₹100 per member',
    iconName: 'Box',
    teamSize: 'Solo Participation (1 Member)',
    rules: [
      'Software allowed: SolidWorks, Fusion 360, AutoCAD, CATIA.',
      'Problem statement provided on spot.',
      'Time duration: 1.5 Hours.',
      'Team Size: Solo participation only (1 member).',
      'Registration Fee: ₹100 per member.',
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
    description: 'A high-speed robotics showdown where wheeled bots race head-to-head down a track to test pure acceleration, motor torque, and stability.',
    fee: 150,
    feeText: '₹150 per member',
    iconName: 'Zap',
    teamSize: 'Maximum 3 Members',
    rules: [
      'Robot Type: Wheeled robot.',
      'Maximum Weight: 750 grams.',
      'Maximum Dimensions: 10 cm × 10 cm × 10 cm (Length × Breadth × Height).',
      'Electric power source only (Max 24V).',
      'Both wired and wireless RC controllers allowed.',
      'Single drag strip length: 30 meters straight.',
      'Best time of 2 attempts qualifies for final knockout.',
      'Registration Fee: ₹150 per member.'
    ],
    timing: 'Jan 16, 10:30 AM',
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
    description: 'An arena match where manual or wireless wheeled robots compete to maneuver, pass, and score goals with a ball while defending their own goalpost against opponent bots.',
    fee: 150,
    feeText: '₹150 per member',
    iconName: 'Trophy',
    teamSize: 'Maximum 3 Members',
    rules: [
      'Robot Type: Wheeled robot.',
      'Maximum Weight: 1 kg.',
      'Maximum Dimensions: 25 cm × 25 cm × 25 cm (Length × Breadth × Height).',
      '2 robots per team on field (1 Striker, 1 Defender/Goalie).',
      'Match duration: 3 mins per half.',
      'No physical destruction of opponent robots permitted.',
      'Standard tennis ball used as football.',
      'Registration Fee: ₹150 per member.'
    ],
    timing: 'Jan 16, 02:00 PM',
    venue: 'Robotics Arena 2'
  },
  {
    id: 'tech-07',
    code: 'TECH-07',
    title: 'TECHNICAL QUIZ',
    category: 'technical',
    description: 'A multi-round battle of brains covering core engineering principles in robotics, mechatronics, electronics, automation, and emerging technologies.',
    fee: 50,
    feeText: '₹50 per member',
    iconName: 'HelpCircle',
    teamSize: 'Solo Participation (1 Member)',
    rules: [
      'Round 1: Rapid Fire MCQ Screening.',
      'Round 2: Audio-Visual Engineering Identification.',
      'Round 3: High-stakes Buzzer Round.',
      'No gadgets or internet access permitted.',
      'Team Size: Solo participation only (1 member).',
      'Registration Fee: ₹50 per member.'
    ],
    timing: 'Jan 16, 11:30 AM',
    venue: 'Main Auditorium'
  },
  {
    id: 'tech-08',
    code: 'TECH-08',
    title: 'CTF (CAPTURE THE FLAG)',
    category: 'technical',
    description: 'A cybersecurity and technical problem-solving challenge where teams decode clues, solve engineering puzzles, or navigate objectives to capture target flags.',
    fee: 100,
    feeText: '₹100 per member',
    iconName: 'Shield',
    teamSize: 'Maximum 3 Members',
    rules: [
      'Categories: Web Exploitation, Reverse Engineering, Cryptography, Forensics.',
      'Jeopardy-style scoring grid.',
      'Attacking the platform infrastructure results in instant DQ.',
      'Dynamic scoring enabled for top flags.',
      'Team Size: Maximum 3 members per team.',
      'Registration Fee: ₹100 per member.'
    ],
    timing: 'Jan 15, 03:30 PM',
    venue: 'Cyber Lab 101'
  },
  {
    id: 'tech-10',
    code: 'TECH-10',
    title: 'CIRCUIT DEBUGGING',
    category: 'technical',
    description: 'A hands-on electronics test where participants analyze faulty analog or digital circuits, identify hardware or schematic bugs, and restore proper functionality within a time limit.',
    fee: 100,
    feeText: '₹100 per member',
    iconName: 'CircuitBoard',
    teamSize: 'Solo Participation (1 Member)',
    rules: [
      'Faulty circuits are provided on the spot.',
      'Identify and fix all injected faults within 30 minutes.',
      'Only the provided multimeter and soldering kit may be used.',
      'Fewest errors and fastest valid repair wins.',
      'Team Size: Solo participation only (1 member).',
      'Registration Fee: ₹100 per member.'
    ],
    timing: 'Jan 15, 02:00 PM',
    venue: 'Electronics Lab 105'
  },
  {
    id: 'tech-11',
    code: 'TECH-11',
    title: 'TUG OF WAR',
    category: 'technical',
    description: 'A head-to-head test of raw pulling power, motor torque, and wheel traction where two competing wheeled robots connected by a cord battle to pull the opponent across a center line.',
    fee: 150,
    feeText: '₹150 per member',
    iconName: 'Trophy',
    teamSize: 'Maximum 3 Members',
    rules: [
      'Robot Type: Wheeled robot.',
      'Maximum Weight: 1.5 kg.',
      'Maximum Dimensions: 20 cm × 15 cm × 15 cm (Length × Breadth × Height).',
      'Two competing wheeled robots connected by a cord.',
      'Battle to pull the opponent across a center line.',
      'Team Size: Maximum 3 members per team.',
      'Registration Fee: ₹150 per member.'
    ],
    timing: 'Jan 16, 02:00 PM',
    venue: 'Robotics Arena 2'
  }
];

export const CIVILIAN_EVENTS: EventItem[] = [
  {
    id: 'civilian-01',
    code: 'NON-01',
    title: 'FREE FIRE',
    category: 'civilian',
    description: 'A mobile esports battle royale tournament where squads compete in custom rooms for survival, tactical dominance, and the highest Booyah/kill points.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Flame',
    teamSize: '4 Squad Members',
    rules: [
      'Map: Bermuda & Purgatory.',
      'Emulators strictly prohibited (Mobile phones only).',
      'Custom room code shared 10 mins prior.',
      'Point system based on placement + kills.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Esports Arena Hall B'
  },
  {
    id: 'civilian-02',
    code: 'NON-02',
    title: 'JUST A MINUTE',
    category: 'civilian',
    description: 'A spontaneous speaking challenge where participants must speak on a given topic for sixty seconds without hesitation, repetition, or deviation.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Mic',
    teamSize: 'Individual',
    rules: [
      'Speak for 60 seconds without hesitation, repetition, or deviation.',
      'Challenged by opponents for grammatical or structural slips.',
      'Topic assigned 30 seconds prior.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Conference Room C'
  },
  {
    id: 'civilian-03',
    code: 'NON-03',
    title: '7TH SENSE',
    category: 'civilian',
    description: 'A sensory perception and intuition game where participants rely on observation, memory, blindfolded identification, or lateral thinking to crack rapid-fire rounds.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Eye',
    teamSize: '2 Members',
    rules: [
      'Blindfolded tactile obstacle navigation.',
      'Acoustic signal pattern recognition.',
      'Decipher visual illusion matrixes.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 16, 09:00 AM',
    venue: 'Activity Room 102'
  },
  {
    id: 'civilian-04',
    code: 'NON-04',
    title: 'PAPER PYRAMID',
    category: 'civilian',
    description: 'A steady-hand dexterity challenge where players race to stack paper cups or folded paper structures into a towering pyramid without a collapse.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Layers',
    teamSize: '2 - 3 Members',
    rules: [
      'Materials provided: 20 A4 sheets, 1 meter masking tape.',
      'Structure must support a standard weight load.',
      'Tallest stable pyramid within 30 minutes wins.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 16, 09:00 AM',
    venue: 'Design Studio B'
  },
  {
    id: 'civilian-05',
    code: 'NON-05',
    title: 'ANIME QUIZ',
    category: 'civilian',
    description: 'A trivia showdown for anime fans featuring character identification, audio/visual rounds, storyline lore, and iconic scenes across popular series.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Sparkles',
    teamSize: '1 - 2 Members',
    rules: [
      'Covers Shonen, Seinen, Classic & Modern Anime Series.',
      'Name the OST sound clip round included.',
      'No smartwatches or phone usage allowed during rounds.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Open Amphitheatre'
  },
  {
    id: 'civilian-06',
    code: 'NON-06',
    title: 'FIVE LEGS',
    category: 'civilian',
    description: 'A team coordination race where team members have their adjacent ankles tied together and must synchronize their steps to cross the finish line without tripping.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Users',
    teamSize: '4 Members',
    rules: [
      '4 team members must cross the finish line touching the ground with ONLY 5 legs combined.',
      'Failure to maintain rule during race incurs time penalty.',
      'Laughter guaranteed!',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 16, 09:00 AM',
    venue: 'Campus Lawn Area'
  },
  {
    id: 'civilian-07',
    code: 'NON-07',
    title: 'PHOTOGRAPHY',
    category: 'civilian',
    description: 'A visual storytelling contest where participants capture striking campus moments or submit thematic photographs judged on composition, lighting, and creativity.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Camera',
    teamSize: 'Individual',
    rules: [
      'Theme revealed at the start of the event.',
      'Photos must be shot during the event window only.',
      'Basic color correction allowed; heavy manipulation is not.',
      'Judged on composition, creativity, and storytelling.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 16, 09:00 AM',
    venue: 'Campus Grounds'
  },
  {
    id: 'civilian-08',
    code: 'NON-08',
    title: 'SPIN AROUND',
    category: 'civilian',
    description: 'A dizzying fun challenge where participants spin around a fixed number of times before immediately attempting to complete a precision task or obstacle walk.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'RefreshCw',
    teamSize: 'Individual',
    rules: [
      'Participants spin for a fixed duration before each task.',
      'Complete the obstacle course without losing balance.',
      'Falling or stepping out incurs a time penalty.',
      'Fastest clean run wins.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Open Amphitheatre'
  },
  {
    id: 'civilian-09',
    code: 'NON-09',
    title: 'BALLOON BLAST',
    category: 'civilian',
    description: 'An energetic arena or relay game where players must protect their own tied balloons while bursting opponents\' balloons—or race to pop balloons under fun constraints.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'PartyPopper',
    teamSize: '2 Members',
    rules: [
      'Balloons are tied to the ankle of each participant.',
      "Protect your balloon while popping opponents'.",
      'Last participant with an intact balloon wins.',
      'No physical contact above the knee.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Student Activity Hub'
  },
  {
    id: 'civilian-10',
    code: 'NON-10',
    title: 'CHESS',
    category: 'civilian',
    description: 'A classic tactical board tournament testing foresight, endgame mastery, and composure under clock pressure.',
    fee: 100,
    feeText: '₹100 per member / per day',
    iconName: 'Crown',
    teamSize: 'Individual',
    rules: [
      'Swiss format with a 10+5 rapid time control.',
      'Touch-move rule strictly enforced.',
      'Draws resolved by tiebreak points.',
      'Phones and engines prohibited.',
      'Registration Fee: ₹100 per member / per day.'
    ],
    timing: 'Jan 15, 11:00 AM',
    venue: 'Conference Room C'
  }
];

export const ALL_EVENTS = [...TECHNICAL_EVENTS, ...CIVILIAN_EVENTS];
