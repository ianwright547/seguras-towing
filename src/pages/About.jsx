import { Phone, Shield, Heart, Award, Users, Clock, Star, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';

const stats = [
  { number: '24/7', label: 'Availability', icon: Clock },
  { number: 'Any', label: 'Vehicle Size', icon: Truck },
  { number: 'Fast', label: 'Dispatch', icon: Phone },
  { number: '50+', label: 'Google Reviews', icon: Star },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Segura's Towing is the most trusted towing operation in Inglewood. We provide fast, reliable, and honest towing dispatch across the South Bay."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-17.jpeg"
            alt="Segura's Towing truck"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-md border border-brand-dark">
            Heavy Duty Dispatch
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            About Segura's Towing in <span className="text-brand-orange">Inglewood</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            Your trusted 24/7 towing and roadside assistance partner in Inglewood, CA.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 px-6 bg-zinc-100 border-b-[8px] border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div>
              <span className="inline-block bg-brand-dark text-white font-black uppercase px-4 py-1.5 mb-6 text-sm tracking-widest">About Us</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8 leading-none">
                Built on these streets.
              </h2>
              <div className="border-l-8 border-brand-orange pl-8 space-y-6">
                <p className="text-stone-700 font-bold text-lg leading-relaxed uppercase tracking-wide">
                  Segura's Towing has one mission: always show up fast, always quote fair, and always get the job done right. We deal with the toughest jobs so you do not have to.
                </p>
                <p className="text-stone-700 font-bold text-lg leading-relaxed uppercase tracking-wide">
                  What started years ago has grown into one of the most trusted towing operations around. We run a fleet of modern flatbed trucks and have safely moved countless vehicles across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-brand-dark border-b-[8px] border-brand-orange">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-2 border-stone-800 bg-stone-900 p-8 shadow-inner">
                <stat.icon size={36} className="text-brand-orange mx-auto mb-4 drop-shadow-md" strokeWidth={2.5} />
                <div className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">{stat.number}</div>
                <div className="text-sm text-stone-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
