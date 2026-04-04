import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = 'Learn More', href, variant = 'dark' }) {
  const isDark = variant === 'dark';
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : {};

  return (
    <Tag
      {...tagProps}
      className={`group relative inline-flex items-center gap-1 overflow-hidden rounded-full border-[1.5px] bg-transparent px-8 py-3.5 text-sm font-bold cursor-pointer transition-all duration-200 ease-out hover:border-transparent hover:rounded-xl active:scale-[0.95] ${
        isDark
          ? 'border-brand-dark/30 text-brand-dark hover:text-white'
          : 'border-white/30 text-white hover:text-brand-dark'
      }`}
    >
      {/* Left arrow - slides in on hover */}
      <ArrowRight
        className={`absolute w-4 h-4 left-[-25%] fill-none z-[9] transition-all duration-200 ease-out group-hover:left-4 ${
          isDark
            ? 'stroke-brand-dark group-hover:stroke-white'
            : 'stroke-white group-hover:stroke-brand-dark'
        }`}
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-200 ease-out">
        {text}
      </span>

      {/* Expanding circle */}
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-300 ease-out ${
          isDark ? 'bg-brand-dark' : 'bg-white'
        }`}
      />

      {/* Right arrow - slides out on hover */}
      <ArrowRight
        className={`absolute w-4 h-4 right-4 fill-none z-[9] transition-all duration-200 ease-out group-hover:right-[-25%] ${
          isDark
            ? 'stroke-brand-dark group-hover:stroke-white'
            : 'stroke-white group-hover:stroke-brand-dark'
        }`}
      />
    </Tag>
  );
}
