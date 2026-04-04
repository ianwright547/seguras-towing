import { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const animations = {
    'fade-up': 'translate-y-3 opacity-0',
    'fade-down': '-translate-y-3 opacity-0',
    'fade-left': 'translate-x-4 opacity-0',
    'fade-right': '-translate-x-4 opacity-0',
    'fade-in': 'opacity-0',
    'scale-up': 'scale-[0.97] opacity-0',
  };

  const initial = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 translate-x-0 opacity-100 scale-100' : initial
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
