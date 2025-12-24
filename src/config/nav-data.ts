import { NavCategory } from '../types';
import { 
  Code, 
  Palette, 
  BookOpen, 
  MessageCircle,
  Github,
  Terminal,
  FileCode,
  Figma,
  Twitter,
  Youtube,
  Newspaper,
  Layers
} from 'lucide-react';

export const navCategories: NavCategory[] = [
  {
    id: 'dev-tools',
    title: 'Development Tools',
    emoji: '🔧',
    description: 'Essential tools for developers',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com',
        description: 'Code hosting and collaboration',
        icon: Github,
      },
      {
        title: 'VS Code',
        url: 'https://code.visualstudio.com',
        description: 'Powerful code editor',
        icon: Code,
      },
      {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        description: 'Developer Q&A community',
        icon: MessageCircle,
      },
      {
        title: 'CodePen',
        url: 'https://codepen.io',
        description: 'Online code editor and community',
        icon: FileCode,
      },
      {
        title: 'Replit',
        url: 'https://replit.com',
        description: 'Collaborative browser IDE',
        icon: Terminal,
      },
      {
        title: 'Can I Use',
        url: 'https://caniuse.com',
        description: 'Browser support tables',
        icon: Layers,
      },
    ],
  },
  {
    id: 'design-resources',
    title: 'Design Resources',
    emoji: '🎨',
    description: 'Tools and inspiration for designers',
    links: [
      {
        title: 'Figma',
        url: 'https://figma.com',
        description: 'Collaborative design tool',
        icon: Figma,
      },
      {
        title: 'Dribbble',
        url: 'https://dribbble.com',
        description: 'Design inspiration showcase',
        icon: Palette,
      },
      {
        title: 'Behance',
        url: 'https://behance.net',
        description: 'Creative work platform',
        icon: Layers,
      },
      {
        title: 'Unsplash',
        url: 'https://unsplash.com',
        description: 'Free high-quality images',
        icon: Palette,
      },
    ],
  },
  {
    id: 'learning',
    title: 'Learning Resources',
    emoji: '📚',
    description: 'Educational platforms and documentation',
    links: [
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        description: 'Web technology documentation',
        icon: BookOpen,
      },
      {
        title: 'freeCodeCamp',
        url: 'https://freecodecamp.org',
        description: 'Learn to code for free',
        icon: Code,
      },
      {
        title: '掘金',
        url: 'https://juejin.cn',
        description: '中文技术社区',
        icon: Newspaper,
      },
      {
        title: 'Dev.to',
        url: 'https://dev.to',
        description: 'Developer community',
        icon: BookOpen,
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media',
    emoji: '🌐',
    description: 'Connect and share',
    links: [
      {
        title: 'Twitter',
        url: 'https://twitter.com',
        description: 'Social networking',
        icon: Twitter,
      },
      {
        title: 'YouTube',
        url: 'https://youtube.com',
        description: 'Video sharing platform',
        icon: Youtube,
      },
      {
        title: 'Discord',
        url: 'https://discord.com',
        description: 'Chat and communities',
        icon: MessageCircle,
      },
    ],
  },
];
