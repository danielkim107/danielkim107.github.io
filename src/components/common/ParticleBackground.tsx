export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large gradient orb - top right */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" />

      {/* Medium gradient orb - bottom left */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent-cyan/15 rounded-full blur-3xl animate-float-delayed" />

      {/* Small accent orb - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-float" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
