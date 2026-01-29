import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`glass rounded-2xl p-6 ${hover ? 'hover:border-accent-purple/30 hover:glow-purple transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
