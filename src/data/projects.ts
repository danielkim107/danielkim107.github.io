import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'AI Chat Platform',
    description:
      'A real-time chat application powered by large language models with streaming responses, conversation history, and multi-model support.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'OpenAI API'],
    github: 'https://github.com/danielkim107',
  },
  {
    title: 'Cloud Dashboard',
    description:
      'Full-stack monitoring dashboard for cloud infrastructure with real-time metrics, alerting, and automated scaling policies.',
    tech: ['Next.js', 'Go', 'PostgreSQL', 'Docker', 'AWS'],
    github: 'https://github.com/danielkim107',
  },
  {
    title: 'Dev Toolkit CLI',
    description:
      'A command-line productivity toolkit for developers featuring project scaffolding, code generation, and automated deployments.',
    tech: ['Rust', 'CLI', 'GitHub Actions', 'TOML'],
    github: 'https://github.com/danielkim107',
  },
  {
    title: 'Portfolio Site',
    description:
      'This very site! A modern, AI-themed portfolio built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a dark aesthetic.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/danielkim107/danielkim107.github.io',
    live: 'https://danielkim107.github.io',
  },
];
