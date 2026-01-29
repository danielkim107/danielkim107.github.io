interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full">
      {name}
    </span>
  );
}
