import { motion } from 'framer-motion';
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GradientText from '@/components/ui/GradientText';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: EnvelopeSimple,
    color: 'hover:text-accent-cyan hover:border-accent-cyan/30',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/danielkim107',
    icon: GithubLogo,
    color: 'hover:text-accent-purple hover:border-accent-purple/30',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedinLogo,
    color: 'hover:text-accent-pink hover:border-accent-pink/30',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-heading font-bold mb-4"
        >
          Get in <GradientText>Touch</GradientText>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-text-secondary mb-10 leading-relaxed"
        >
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about tech. Feel free to reach out!
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {contactLinks.map(({ label, href, icon: Icon, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 glass rounded-xl text-text-secondary transition-all duration-300 ${color}`}
            >
              <Icon size={24} />
              <span className="font-heading font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
