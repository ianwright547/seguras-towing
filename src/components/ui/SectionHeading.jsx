export default function SectionHeading({ eyebrow, title, subtitle, light = false, className = '' }) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-sm font-bold tracking-[0.2em] uppercase mb-3 ${light ? 'text-brand-blue' : 'text-brand-blue'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
