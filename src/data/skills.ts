import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'code' },
      { name: 'Python', icon: 'code' },
      { name: 'Go', icon: 'code' },
      { name: 'Rust', icon: 'code' },
      { name: 'Java', icon: 'code' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'browser' },
      { name: 'Next.js', icon: 'browser' },
      { name: 'Tailwind CSS', icon: 'palette' },
      { name: 'Framer Motion', icon: 'play' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'terminal' },
      { name: 'FastAPI', icon: 'lightning' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Redis', icon: 'database' },
      { name: 'GraphQL', icon: 'graph' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: 'cube' },
      { name: 'Kubernetes', icon: 'cube' },
      { name: 'AWS', icon: 'cloud' },
      { name: 'CI/CD', icon: 'gear' },
      { name: 'Git', icon: 'git-branch' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'LLM APIs', icon: 'robot' },
      { name: 'LangChain', icon: 'link' },
      { name: 'PyTorch', icon: 'brain' },
      { name: 'RAG', icon: 'magnifying-glass' },
    ],
  },
];
