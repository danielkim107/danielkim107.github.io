export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}
