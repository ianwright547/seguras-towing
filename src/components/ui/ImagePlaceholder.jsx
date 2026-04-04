export default function ImagePlaceholder({ className = '', label = '', dark = false }) {
  return (
    <div className={`relative overflow-hidden ${dark ? 'bg-brand-dark-lighter' : 'bg-gradient-to-br from-[#EEEEE9] via-[#F3F3F0] to-[#EEEEE9]'} ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          opacity: dark ? 0.06 : 0.04,
          backgroundImage: `linear-gradient(${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className={`w-10 h-10 rounded-xl ${dark ? 'bg-white/[0.04]' : 'bg-black/[0.04]'} flex items-center justify-center`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={dark ? 'text-white/15' : 'text-black/15'}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        {label && <span className={`text-[11px] font-medium tracking-wide ${dark ? 'text-white/15' : 'text-black/15'}`}>{label}</span>}
      </div>
    </div>
  );
}
