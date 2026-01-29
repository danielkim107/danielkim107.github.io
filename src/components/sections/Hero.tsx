import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from '@phosphor-icons/react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-accent-cyan font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-4"
        >
          <GradientText>Daniel Kim</GradientText>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl font-heading text-text-secondary mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'AI Enthusiast',
              2000,
              'Full-Stack Developer',
              2000,
              'Open Source Contributor',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
        >
          I build modern, performant web applications and explore the intersection
          of software engineering and artificial intelligence.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <a href="#about" className="inline-block">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-text-secondary" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
