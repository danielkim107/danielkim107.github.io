import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:shadow-lg hover:shadow-accent-purple/25',
    outline:
      'border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
