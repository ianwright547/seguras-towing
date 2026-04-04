import { cn } from '../../lib/utils';

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-hover hover:shadow-lg hover:shadow-brand-blue/25 active:scale-[0.98]',
    secondary: 'bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm',
    outline: 'bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white',
    ghost: 'bg-transparent text-brand-blue hover:bg-brand-blue/10',
    dark: 'bg-brand-dark text-white hover:bg-brand-dark-lighter hover:shadow-lg active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
