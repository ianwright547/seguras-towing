import AnimateOnScroll from '../ui/AnimateOnScroll';
import CounterAnimation from '../ui/CounterAnimation';

const pillars = [
  { stat: '15-30', unit: ' min', title: 'Fastest in Inglewood', description: 'Our trucks are already on the road. When you call, the nearest driver heads straight to you - no dispatchers, no hold music.' },
  { stat: '$0', unit: '', title: 'Hidden fees. Zero.', description: 'The price we quote on the phone is the price you pay. No surge pricing, no "oh we forgot to mention" charges. Ever.' },
  { stat: 'Safe', unit: '', title: 'Vehicles moved', description: 'We have built this business on one thing: treat every car with complete respect.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-14 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#F9F9F8' }}>
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: content */}
            <div className="lg:col-span-7">
              {/* Counter + label */}
              <div className="flex items-end gap-3 mb-5">
                <span className="text-[4.5rem] md:text-[6rem] font-black text-text-primary leading-none tracking-tighter">
                  24/7
                </span>
                <span className="text-text-secondary text-sm font-semibold pb-3 border-b-2 border-brand-blue">
                  Dispatch & Recovery
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight tracking-tight mb-3">
                Why Inglewood calls us first
              </h2>
              <p className="text-text-secondary leading-relaxed mb-10 max-w-lg">
                Not the cheapest. Not the biggest fleet. Just the most reliable towing company in the South Bay - ask anyone.
              </p>

              {/* Pillars - left-border accent, no icons */}
              <div className="space-y-0">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className={`relative pl-5 py-6 border-l-2 transition-colors duration-300 hover:border-brand-blue ${
                      i === 0 ? 'border-brand-blue' : 'border-black/[0.08]'
                    } ${i < pillars.length - 1 ? 'border-b border-b-black/[0.05]' : ''}`}
                  >
                    <span className="text-xl md:text-2xl font-black text-text-primary tracking-tight">
                      {pillar.stat}<span className="text-brand-blue">{pillar.unit}</span>
                    </span>
                    <h3 className="text-sm font-bold text-text-primary mt-0.5 mb-1">{pillar.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: real truck photo */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute -left-3 top-6 bottom-6 w-1 bg-brand-blue rounded-full" />
                  <img
                    src="/images/real-tow-13.jpeg"
                    alt="Segura's tow truck in Inglewood"
                    className="w-full h-[500px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] text-text-secondary/40 mt-2.5 tracking-wide uppercase">
                  Our fleet &mdash; Inglewood, CA
                </p>
              </div>
            </div>

            {/* Mobile: photo below pillars */}
            <div className="lg:hidden">
              <img
                src="/images/real-tow-13.jpeg"
                alt="Segura's tow truck"
                className="w-full h-[220px] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
