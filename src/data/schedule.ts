import { ScheduleItem } from '../types';

export const SCHEDULE_DAY_1: ScheduleItem[] = [
  {
    day: 1,
    time: '08:30',
    period: 'AM',
    title: 'REGISTRATION & WELCOME',
    description: 'Technical events check-in. Collect your badges and welcome kit at the main gate.',
    badges: ['MANDATORY', 'MAIN HALL'],
    iconName: 'QrCode'
  },
  {
    day: 1,
    time: '09:30',
    period: 'AM',
    title: 'INAUGURATION & OPENING CEREMONY',
    description: 'Welcome address, event overview, and official opening of the ceremony.',
    badges: ['MAIN AUDITORIUM'],
    iconName: 'Megaphone'
  },
  {
    day: 1,
    time: '10:30',
    period: 'AM',
    title: 'TEA BREAK',
    description: 'Recharge with tea and snacks before the events begin.',
    badges: ['DINING HALL'],
    iconName: 'Coffee'
  },
  {
    day: 1,
    time: '11:00',
    period: 'AM',
    title: 'TECHNICAL WORKSHOP',
    description: 'Hands-on technical workshop for registered technical event participants.',
    badges: ['WORKSHOP BAY'],
    iconName: 'Wrench'
  },
  {
    day: 1,
    time: '11:00',
    period: 'AM',
    title: 'NON-TECHNICAL EVENTS',
    description: 'Chess, Anime Quiz, Free Fire, Just A Minute, Balloon Blast, and Spin Around.',
    badges: ['ACTIVITY HALLS'],
    iconName: 'Users'
  },
  {
    day: 1,
    time: '01:00',
    period: 'PM',
    title: 'LUNCH BREAK',
    description: 'Break for lunch and regroup before the afternoon sessions.',
    badges: ['DINING HALL'],
    iconName: 'Coffee'
  },
  {
    day: 1,
    time: '02:00',
    period: 'PM',
    title: 'LINE FOLLOWER ROBOT & CIRCUIT DEBUGGING',
    description: 'Technical events: Line Follower Robot and Circuit Debugging.',
    badges: ['ROBOTICS ARENA', 'ELECTRONICS LAB'],
    iconName: 'Cpu'
  },
  {
    day: 1,
    time: '03:30',
    period: 'PM',
    title: 'START UP & CTF',
    description: 'Technical events: Start Up pitch and Capture The Flag cybersecurity challenge.',
    badges: ['INNOVATION LAB', 'CYBER LAB'],
    iconName: 'Shield'
  }
];

export const SCHEDULE_DAY_2: ScheduleItem[] = [
  {
    day: 2,
    time: '08:00',
    period: 'AM',
    title: 'BREAKFAST & REFRESHMENTS',
    description: 'Recharge with hot South Indian breakfast and freshly brewed coffee.',
    badges: ['DINING HALL'],
    iconName: 'Coffee'
  },
  {
    day: 2,
    time: '12:00',
    period: 'PM',
    title: 'SUBMISSION DEADLINE',
    description: 'Final code freeze, repository commit lock, and project submission.',
    isHighlight: true,
    highlightText: 'CODE FREEZE! LOCK ALL REPOSITORIES.',
    badges: ['CRITICAL DEADLINE'],
    iconName: 'AlertTriangle'
  },
  {
    day: 2,
    time: '02:00',
    period: 'PM',
    title: 'PROJECT PRESENTATIONS',
    description: 'Showcase your functional prototypes and live demos to the judging council.',
    badges: ['DEMO BAYS 1-5'],
    iconName: 'Presentation'
  },
  {
    day: 2,
    time: '05:00',
    period: 'PM',
    title: 'AWARDS CEREMONY',
    description: 'Announcing winners, trophy distribution, cash prizes, and closing valedictory.',
    badges: ['MAIN STAGE'],
    iconName: 'Award'
  }
];
