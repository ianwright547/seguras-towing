const steps = [
  { number: '1', title: 'Call Us Now', description: "We answer 24/7. Tell us where you are and what you drive. You get a guaranteed upfront price.", theme: 'light' },
  { number: '2', title: 'We Dispatch Immediately', description: "The closest tow truck instantly heads your way. You get the driver's name and an exact ETA.", theme: 'dark' },
  { number: '3', title: 'You Get Home Safe', description: "Our licensed operator secures your vehicle and delivers it exactly where you need it. No hidden fees.", theme: 'light' },
];

import AnimateOnScroll from '../ui/AnimateOnScroll';

export default function Process() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-100 border-t-8 border-brand-orange border-b-[8px] border-zinc-200">
      <AnimateOnScroll animation="fade-up" className="max-w-[1200px] mx-auto text-center mb-16">
        <span className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6">Simple Process</span>
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-none tracking-tighter uppercase">
          Our Towing Process.
        </h2>
      </AnimateOnScroll>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const isDark = step.theme === 'dark';
            return (
              <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 150} className={`
              ${isDark ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-brand-dark border-brand-dark'} 
              border-4 p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group transition-all duration-200 hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]
              ${i === 1 ? 'lg:mt-12' : i === 2 ? 'lg:mt-24' : ''}
            `}>
                <div className={`absolute -right-8 -top-8 text-[120px] md:text-[180px] font-black text-transparent ${isDark ? '[-webkit-text-stroke:4px_#333]' : '[-webkit-text-stroke:4px_#e4e4e7]'} leading-none select-none z-0 transition-all duration-300 group-hover:scale-110 group-hover:[-webkit-text-stroke:4px_#FF5A00]`}>
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${isDark ? 'bg-white text-brand-dark' : 'bg-brand-orange text-white'} text-3xl font-black flex items-center justify-center border-4 border-brand-dark mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className={`text-base font-bold leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  );
}
