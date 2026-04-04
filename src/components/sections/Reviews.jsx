import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const testimonials = [
  { name: 'Patricia W.', text: "My Mercedes got a flat on the 105 at midnight. Called Segura's and they had someone to me in under 25 minutes. Very professional, very careful with my car. Fair price too. Will use again.", date: '3 weeks ago' },
  { name: 'Michael D.', text: "Locked my keys in my car outside the Forum. Segura's was there in 15 minutes and got me back in without a scratch. Saved my night. These guys are the real deal.", date: '1 month ago' },
  { name: 'Sandra L.', text: "I've tried 3 other towing companies in Inglewood and Segura's is the only towing company I trust now.", date: '2 weeks ago' },
  { name: 'Carlos R.', text: "Called around for prices after my Mustang wouldn't start. Segura's was the most affordable AND the fastest. The operator came out quickly and took care of everything. Real business that cares.", date: '6 weeks ago' },
  { name: 'James T.', text: "Best towing service in Inglewood, hands down. Called at 2 AM after an accident and they were there fast. The driver was friendly and careful with my car. Way cheaper than the other quotes I got.", date: '1 month ago' },
  { name: 'Maria G.', text: "They arrived in less than 20 minutes when my car broke down on the 405. Super professional, fair price, and got my car to the shop safely. I will definitely call Segura's again. Highly recommend!", date: '2 months ago' },
  { name: 'Lisa H.', text: "Had my classic Camaro towed on their flatbed. They were incredibly careful and treated my car like it was their own. Affordable rates and great communication.", date: '3 weeks ago' },
  { name: 'Robert K.', text: "Needed a tow from LAX area at 3 AM. They answered immediately and were there in 25 minutes. No surge pricing, no games. Just honest, fast service.", date: '2 weeks ago' },
  { name: 'Angela M.', text: "My daughter's car broke down in Hawthorne late at night. Called Segura's and they treated her with complete respect. Got her car home safe. Can't thank them enough.", date: '1 month ago' },
  { name: 'Tony S.', text: "Segura's has towed 3 of my vehicles over the years. Always reliable, always fair. They're the only ones I call now.", date: '5 weeks ago' },
  { name: 'Diana P.', text: "Quick response, fair price, professional driver. Everything you want in a towing company. Five stars all day.", date: '3 weeks ago' },
  { name: 'Marcus J.', text: "SO glad I found these guys! Saved me at least $100 compared to the first quote I got. Fast, friendly, and honest.", date: '2 weeks ago' },
];

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Google</span>
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const touchStart = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);
  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(maxIndex, i + 1));

  // Touch/swipe support
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  return (
    <section id="reviews" className="relative pt-14 pb-10 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header with arrows */}
        <AnimateOnScroll animation="fade-in">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary leading-tight tracking-tight">
                What our customers say
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-text-secondary text-sm hidden md:block">
                50+ Google reviews
              </p>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="flex h-10 w-10 items-center justify-center border border-black/[0.08] text-text-secondary hover:text-text-primary hover:border-black/20 transition-all duration-200 cursor-pointer rounded-lg active:scale-[0.95] disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  disabled={current >= maxIndex}
                  className="flex h-10 w-10 items-center justify-center border border-black/[0.08] text-text-secondary hover:text-text-primary hover:border-black/20 transition-all duration-200 cursor-pointer rounded-lg active:scale-[0.95] disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next reviews"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Sliding track */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-2 first:pl-0 last:pr-0"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="bg-[#F9F9F8] border border-black/[0.06] rounded-xl p-6 h-full flex flex-col min-h-[220px]">
                  <GoogleBadge />
                  <p className="text-sm text-text-primary/80 leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-black/[0.05]">
                    <span className="text-sm font-bold text-text-primary">{t.name}</span>
                    <span className="text-xs text-text-secondary ml-2">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? 'w-6 bg-brand-blue' : 'w-1.5 bg-black/10 hover:bg-black/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
