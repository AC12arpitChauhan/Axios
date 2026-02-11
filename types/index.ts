/**
 * Centralized type definitions for the Axios IIIT Bhopal website.
 *
 * All shared interfaces and types are defined here to maintain a single
 * source of truth and enable strict type-checking across the project.
 */

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

// ─── Events ──────────────────────────────────────────────────────────────────

export interface Event {
  id: number;
  title: string;
  des: string;
  img: string;
  date: string;
  location: string;
  attendees: string;
  details: string;
}

// ─── Team ────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;
  link?: string;
}

export interface SocialMediaLink {
  id: number;
  img: string;
  link: string;
}

// ─── Sponsors ────────────────────────────────────────────────────────────────

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

// ─── Grid / Bento ────────────────────────────────────────────────────────────

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

// ─── Domains / Experience ────────────────────────────────────────────────────

export interface Domain {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface DomainCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
}

// ─── Featured Event Stats ────────────────────────────────────────────────────

export interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

// ─── Join / Recruitment ──────────────────────────────────────────────────────

export interface RecruitmentStep {
  number: string;
  title: string;
  desc: string;
}

// ─── Approach / Vision Cards ─────────────────────────────────────────────────

export interface ApproachCardProps {
  title: string;
  des: string;
  children?: React.ReactNode;
}

// ─── Button ──────────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "outline" | "ghost";

// ─── Animation ───────────────────────────────────────────────────────────────

export interface AnimateRevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export interface AnimateTextSplitOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
}

export interface SplitChar {
  char: string;
  key: number;
}
