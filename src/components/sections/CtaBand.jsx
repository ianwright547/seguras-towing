import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';

export default function CtaBand() {
  return (
    <section className="relative py-10 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-blue">
      {/* Angled gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight tracking-tight mb-1">
            Stranded right now?
          </h2>
          <p className="text-white/60 text-sm">
            Every minute on the roadside is one too many. We answer in under 60 seconds.
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="group inline-flex items-center gap-2.5 bg-white text-brand-blue font-bold text-base py-3.5 px-7 rounded-xl hover:bg-white/90 transition-all duration-200 active:scale-[0.98] min-h-[44px] shrink-0"
        >
          <Phone size={17} strokeWidth={2} />
          {PHONE_NUMBER}
          <ArrowRight size={15} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </a>
      </div>
    </section>
  );
}
