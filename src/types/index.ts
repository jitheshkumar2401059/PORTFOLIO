export type ProjectCategory = 
  | 'All'
  | 'AI / ML'
  | 'Data Science'
  | 'Software Development'
  | 'Web Development'
  | 'Embedded Systems / IoT';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  summary: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface SkillDetail {
  name: string;
  category: string;
  description: string;
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  institutionOrContext: string;
  description: string;
  tags?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  statusMessage?: string;
  focusAreas: string[];
  bio: string[];
  location: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    expectedGraduation: string;
    status: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}
