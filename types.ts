import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'green' | 'orange' | 'purple' | 'blue';
}

export interface MatchInfo {
  title: string;
  time: string;
  location: string;
  slots: number;
}