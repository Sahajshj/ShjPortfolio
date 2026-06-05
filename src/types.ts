/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  role?: string;
  bullets: string[];
  time: string;
  category: 'cloud' | 'software' | 'iot-hardware';
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badgeUrl?: string;
  credentialId?: string;
}

export interface AchievementItem {
  title: string;
  rank?: string;
  summary: string;
  bullets?: string[];
  organizer: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}
