import { motion } from 'framer-motion';
import { GithubLogo, ArrowSquareOut } from '@phosphor-icons/react';
import { fadeInUp } from '@/lib/animations';
import TechBadge from './TechBadge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass rounded-2xl p-6 hover:border-accent-purple/30 hover:glow-purple transition-all duration-300 flex flex-col h-full"
    >
      <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
        {project.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <GithubLogo size={18} />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-pink transition-colors"
          >
            <ArrowSquareOut size={18} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
