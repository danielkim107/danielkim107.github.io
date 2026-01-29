import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import GradientText from '@/components/ui/GradientText';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center"
        >
          Featured <GradientText>Projects</GradientText>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-text-secondary text-center max-w-xl mx-auto mb-12"
        >
          A selection of projects I've built. Each one taught me something new
          about engineering and design.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
