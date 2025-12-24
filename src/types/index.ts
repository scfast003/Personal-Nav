import { LucideIcon } from 'lucide-react';

export interface NavLink {
  title: string;
  url: string;
  description: string;
  icon?: LucideIcon;
  iconName?: string;
}

export interface NavCategory {
  id: string;
  title: string;
  description?: string;
  emoji?: string;
  links: NavLink[];
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  github?: string;
  email?: string;
}

export type Theme = 'light' | 'dark';
