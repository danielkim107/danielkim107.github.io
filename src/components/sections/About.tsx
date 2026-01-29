import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';
import GradientText from '@/components/ui/GradientText';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center"
        >
          About <GradientText>Me</GradientText>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} className="space-y-4">
            <p className="text-text-secondary leading-relaxed">
              I'm a software engineer passionate about building elegant solutions
              to complex problems. With experience across the full stack, I
              specialize in creating performant, user-friendly applications using
              modern web technologies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My current focus is on the intersection of AI and software
              engineering — exploring how large language models can augment
              developer workflows and create more intelligent applications.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, contributing
              to open source, or diving into the latest AI research papers.
            </p>
          </motion.div>

          <motion.div variants={slideInRight} className="glass rounded-2xl p-6">
            <h3 className="font-heading font-semibold text-lg mb-4 text-text-primary">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              {[
                ['Focus', 'Full-Stack & AI Engineering'],
                ['Languages', 'TypeScript, Python, Go, Rust'],
                ['Interests', 'LLMs, Distributed Systems, DevTools'],
                ['Editor', 'VS Code + Vim keybindings'],
                ['OS', 'macOS & Linux'],
              ].map(([label, value]) => (
                <li key={label} className="flex gap-3 text-sm">
                  <span className="text-accent-cyan font-mono min-w-[90px]">
                    {label}
                  </span>
                  <span className="text-text-secondary">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
