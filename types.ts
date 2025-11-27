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

// Battle booking types
export type BattleStatus = 'available' | 'limited' | 'full';
export type BattleFormat = '5v5' | '9v9';

export interface Match {
  id: string;
  date: string;
  day: string;
  time: string;
  location: 'LORAG' | 'Olympia' | 'PEC';
  fullLocationName: string;
  current: number;
  max: number;
  price: number;
  tags: string[];
  team1Players: string[];
  team2Players: string[];
}