import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  // Detail View Fields
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  challenges: ProjectChallenge[];
  solution?: string;
  outcome?: string;
  detailImages: string[];
}

export interface ExperienceCard {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  cv: string;
}
