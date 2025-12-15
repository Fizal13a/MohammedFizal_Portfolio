import { Project } from './types';
import { Gamepad2, Github, Linkedin, Mail, MapPin, Youtube, Play, Monitor, Link } from 'lucide-react';

export const PROFILE = {
  name: 'Mohammed Fizal',
  role: 'Game Developer',
  bio: 'I am a passionate Game Developer with over 3 years of experience building immersive interactive experiences. My expertise bridges the gap between creative design and technical implementation, ensuring gameplay feels as good as it looks.',
  email: 'mhdfizal13@gmail.com',
  location: 'Chennai, TN, India',
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/Fizal13a', icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/fizal-mohammed/', icon: Linkedin },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Racing Motocross Multiplayer',
    description: 'Racing Motocross Multiplayer is a 3D online multiplayer motocross bike racing game featuring real-time competitive races, physics-based bike handling, responsive controls, and high-speed tracks designed for skill-based racing against other players.',
    techStack: ['Unity', 'C#', 'NGO'],
    category: 'Professional',
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/damqgasyv/video/upload/v1765772059/MC_Video_1_1_j805i3.mp4', alt: 'Gameplay Video 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765772049/MC_Image_1_1_h3iabw.jpg', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765772051/MC_Image_2_1_j0n2tj.png', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765772048/Screenshot_20241220_151018_n5dlj2.jpg', alt: 'Gameplay Screenshot 3' },
    ],
    links: [
     
    ]
  },
  {
    id: '2',
    title: 'Speed Pursuit',
    description: 'Speed Pursuit is a fast-paced 3D multiplayer car racing game with real-time online races, tight controls, and competitive high-speed gameplay against other players.',
    techStack: ['Unity', 'C#', 'NGO'],
    category: 'Professional',
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/damqgasyv/video/upload/v1765772035/HorizonCut_1_bt0y9j.mp4', alt: 'Gameplay Video 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770985/Screenshot_20251214_195844_Terra_jwfnad.jpg', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770982/Screenshot_20251214_195624_Terra_wns6ek.jpg', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770983/Screenshot_20251214_195637_Terra_yef1wo.jpg', alt: 'Gameplay Screenshot 3' },
    ],
    links: [
      
    ]
  },
  {
    id: '3',
    title: 'Soccer Super Striker',
    description: 'Soccer Super Striker is a turn-based football puzzle game inspired by Score Hero, focused on precision passing, shooting, and tactical decision-making across curated match scenarios.',
    techStack: ['Unity', 'C#'],
    category: 'Professional',
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/damqgasyv/video/upload/v1765770895/Screenrecording_20250507_235305_1_bdrrb3.mp4', alt: 'Gameplay Video 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770849/Screenshot_20251214_201128_Terra_w1tglg.jpg', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770843/Screenshot_20251214_201213_Terra_lkaaon.jpg', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770841/Screenshot_20251214_201154_Terra_tiajun.jpg', alt: 'Gameplay Screenshot 3' },
    ],
    links: [

    ]
  },
  {
    id: '4',
    title: 'Replicube',
    description: 'Replicube is a swipe-based 3D puzzle game where players move a cube across grid-based levels, strategically planning each move to solve challenges through precise timing, logic, and spatial awareness.',
    techStack: ['Unity', 'C#'],
    category: 'Personal',
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/damqgasyv/video/upload/v1765770656/Screen_Recording_2025-12-15_075654_vmjbkd.mp4', alt: 'Gameplay Video 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770647/Screenshot_2025-12-14_205241_doyfoj.png', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770648/Screenshot_2025-12-14_205320_k9quex.png', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770648/Screenshot_2025-12-14_205354_a0ebfw.png', alt: 'Gameplay Screenshot 3' },
    ],
    links: [
      { label: 'Github', url: 'https://github.com/Fizal13a/Replicube', type: 'github' },
      { label: 'Play', url: 'https://fizaldevvv.itch.io/replicube', type: 'play' },
    ]
  },
  {
    id: '5',
    title: 'Hold',
    description: 'Hold is a 3D multiplayer car-based arena game featuring capture-the-flag mechanics, real-time competitive gameplay, and physics-driven vehicle control designed for fast, tactical multiplayer matches.',
    techStack: ['Unity', 'C#','NGO'],
    category: 'Personal',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770557/Screenshot_2025-12-15_073901_yldpov.png', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770556/Screenshot_2025-12-15_074145_zia8oj.png', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770557/Screenshot_2025-12-15_074243_oucso8.png', alt: 'Gameplay Screenshot 3' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765770558/Screenshot_2025-12-15_074201_eq4cjr.png', alt: 'Gameplay Screenshot 1' },
    ],
    links: [
      { label: 'Github', url: 'https://github.com/Fizal13a/Hold', type: 'github' }
    ]
  },
  {
    id: '6',
    title: 'Legendary Warrior',
    description: 'Legendary Warrior is a turn-based battle game featuring strategic combat, character abilities, and tactical decision-making, where players plan each move carefully to defeat opponents and progress through challenging encounters.',
    techStack: ['Unity', 'C#'],
    category: 'Personal',
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/damqgasyv/video/upload/v1765769947/Screen_Recording_2025-12-15_083307_s7jinz.mp4', alt: 'Gameplay video 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765769726/Screenshot_2025-12-15_083046_dkjpzh.png', alt: 'Gameplay Screenshot 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765769726/Screenshot_2025-12-15_083102_q593tb.png', alt: 'Gameplay Screenshot 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765769727/Screenshot_2025-12-15_083123_w8b2vl.png', alt: 'Gameplay Screenshot 3' },
    ],
    links: [
      { label: 'Github', url: 'https://github.com/Fizal13a/Legendary-Warrior-', type: 'github' },
      { label: 'Play', url: 'https://fizaldevvv.itch.io/legendary-warrior', type: 'play' },
    ]
  },
  {
    id: '7',
    title: 'Procedural Maze Generation Pro',
    description: 'The Procedural Maze Generator is a lightweight Unity tool that allows you to generate random mazes directly in the editor or at runtime.',
    techStack: ['Unity', 'C#'],
    category: 'Tools',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776439/Card_fovrwh.jpg', alt: 'Media 1' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776442/Content_1_tcfaxl.jpg', alt: 'Media 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776440/Content_2_a1goda.jpg', alt: 'Media 3' },
    ],
    links: [
      { label: 'Link', url: 'https://assetstore.unity.com/packages/tools/level-design/procedural-maze-generator-pro-332152', type: 'link' },
    ]
  },
  {
    id: '8',
    title: 'SmartGrid Pro – Ultimate Snapping & Alignment Tool',
    description: 'Smart Grid Pro is a powerful Unity snapping tool for precise object placement. It auto-snaps to a grid, aligns dynamically, and shows nearby object distances.',
    techStack: ['Unity', 'C#'],
    category: 'Tools',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776969/1c95b01f-6217-40bf-9323-d810434c91b5_lvavnb.webp', alt: 'Media 2' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776974/16e59439-50d1-43e2-ae05-eec4dd2ca04a_achpe8.webp', alt: 'Media 3' },
      { type: 'image', url: 'https://res.cloudinary.com/damqgasyv/image/upload/v1765776970/cd777d14-a69a-4db3-8038-3dc3d4cdc063_mwwajw.webp', alt: 'Media 4' },
    ],
    links: [
      { label: 'Link', url: 'https://assetstore.unity.com/packages/tools/level-design/smartgrid-pro-ultimate-snapping-alignment-tool-313279', type: 'link' },
      { label: 'Youtube', url: 'https://youtu.be/0T7oi2aQDuA?si=a-F1b_7FsaVsyFnS', type: 'play' },
    ]
  }
];