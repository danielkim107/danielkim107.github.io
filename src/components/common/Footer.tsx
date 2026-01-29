import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/danielkim107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <LinkedinLogo size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <EnvelopeSimple size={20} />
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Daniel Kim. All rights reserved.
        </p>

        <p className="text-xs text-text-secondary flex items-center gap-1.5">
          Powered by
          <span className="text-claude font-semibold">Claude</span>
        </p>
      </div>
    </footer>
  );
}
