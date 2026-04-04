import AnimateOnScroll from '../ui/AnimateOnScroll';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function OwnerStory() {
  return (
    <section className="relative pt-14 pb-12 md:pt-28 md:pb-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FAFAFA' }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Left-aligned header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-16 md:mb-24 max-w-2xl">
            <div className="w-10 h-[3px] bg-brand-blue rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-[1.1] tracking-tight">
              A message from the<br />Segura family
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Placeholder photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
              <ImagePlaceholder className="w-full h-[420px] md:h-[520px]" label="Fleet photo" />
            </div>
            <div className="absolute -bottom-6 right-4 md:right-10 bg-brand-blue text-white rounded-2xl px-7 py-5 shadow-sm">
              <div className="text-3xl font-black leading-none">15+</div>
              <div className="text-sm font-medium mt-1.5 opacity-90">Years Serving<br />Inglewood</div>
            </div>
          </div>

          {/* Right: Personal letter */}
          <div>
            <div className="border-l-[3px] border-brand-blue pl-7 space-y-5 mb-10">
              <p className="text-text-secondary text-lg leading-relaxed">
                When my father started this company, he had one tow truck and a simple rule: treat every person you help the way you would want to be treated if you were stranded on the side of the road at 2 AM.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                That was over 15 years ago. Today, we have a fleet of modern flatbed trucks, a team of certified operators, and we have towed over 10,000 vehicles across Inglewood and South LA. But that rule has never changed.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                We answer every call personally. We quote before we roll. We show up fast, and we treat your vehicle like it is our own. This is not just a business to us - it is our family name on the side of every truck.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-text-primary flex items-center justify-center text-white font-black text-base">DS</div>
              <div>
                <div className="font-bold text-text-primary text-base">David Segura</div>
                <div className="text-sm text-text-secondary">Owner & Operator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
