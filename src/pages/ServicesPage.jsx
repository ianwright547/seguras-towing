import { Wrench } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import FinalCTA from '../components/sections/FinalCTA';

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Our Services"
        description="Segura's Towing offers 24/7 emergency towing, flatbed, roadside assistance, lockouts, jump starts, accident recovery, motorcycle towing, fuel delivery, tire change, battery installation, and winch-out in Inglewood, CA."
        canonical="/services"
      />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-10.jpeg"
            alt="Segura's Towing fleet ready for service"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-brand-dark">
            <div className="flex items-center gap-2"><Wrench size={16} /> Full-Service Towing</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">
            24/7 Towing Services
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            From emergency tows to roadside flat tire fixes, everything you need is handled by one team that never closes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Process */}
      <Process />

      {/* Quote Form */}
      <FinalCTA />
    </>
  );
}
