import { motion } from 'framer-motion';
import {
  Code,
  Browser,
  Palette,
  Play,
  Terminal,
  Lightning,
  Database,
  Graph,
  Cube,
  Cloud,
  Gear,
  GitBranch,
  Robot,
  Link,
  Brain,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { skillCategories } from '@/data/skills';
import Card from '@/components/ui/Card';
import GradientText from '@/components/ui/GradientText';
import type { IconProps } from '@phosphor-icons/react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<IconProps>> = {
  code: Code,
  browser: Browser,
  palette: Palette,
  play: Play,
  terminal: Terminal,
  lightning: Lightning,
  database: Database,
  graph: Graph,
  cube: Cube,
  cloud: Cloud,
  gear: Gear,
  'git-branch': GitBranch,
  robot: Robot,
  link: Link,
  brain: Brain,
  'magnifying-glass': MagnifyingGlass,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
          Tech <GradientText>Stack</GradientText>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="font-heading font-semibold text-lg mb-4 text-accent-cyan">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-text-secondary bg-white/5 rounded-lg border border-white/5 hover:border-accent-purple/30 hover:text-text-primary transition-all"
                    >
                      <Icon size={14} className="text-accent-purple" />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
