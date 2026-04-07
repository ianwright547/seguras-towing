import { Phone, Shield, Heart, Award, Users, Clock, Star, Truck, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';

const stats = [
  { number: '24/7', label: 'Availability', icon: Clock },
  { number: '20+', label: 'Years Serving Inglewood', icon: Award },
  { number: '10k+', label: 'Vehicles Towed', icon: Truck },
  { number: '4.9', label: 'Average Star Rating', icon: Star },
];

const values = [
  {
    icon: Heart,
    title: 'Family-Owned, Community-First',
    desc: 'Three generations of Seguras working out of the same Inglewood lot. Our reputation lives or dies in this neighborhood, so we treat every call like the customer is our own family.',
  },
  {
    icon: Shield,
    title: 'Honest, Upfront Pricing',
    desc: 'You get an exact, all-in price quoted on the phone before we dispatch. No surge pricing, no late-night surcharges, no surprise fees when we arrive. The price we say is the price you pay.',
  },
  {
    icon: Clock,
    title: 'Speed That Actually Matters',
    desc: 'Stranded on a dark shoulder is no place to wait an hour. Our trucks are stationed throughout Inglewood and the South Bay, so we average 15 to 30 minutes to anywhere in our coverage zone.',
  },
  {
    icon: Award,
    title: 'Licensed, Insured & Trained',
    desc: 'Every Segura\'s operator is fully certified, insured, and trained on flatbed, wheel-lift, motorcycle, and heavy-duty equipment. We carry the right rig for the right job, every time.',
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Segura's Towing | Family-Owned Since 2006"
        description="Segura's Towing is a family-owned tow truck company in Inglewood, CA. Since 2006 we've served the South Bay with 24/7 dispatch, upfront pricing, and a modern flatbed fleet. Call (310) 490-0246."
        canonical="/about"
      />

      {/* ── Hero ── */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-17.jpeg"
            alt="Segura's Towing flatbed truck on the road in Inglewood, CA"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-md border border-brand-dark">
            Family-Owned Since 2006
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            About Segura's Towing in <span className="text-brand-orange">Inglewood</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            Three generations of operators. One family. Inglewood's hometown tow truck since 2006.
          </p>
        </div>
      </section>

      {/* ── Founding Story ── */}
      <section className="py-20 md:py-28 px-6 bg-zinc-100 border-b-[8px] border-zinc-200">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block bg-brand-dark text-white font-black uppercase px-4 py-1.5 mb-6 text-sm tracking-widest">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-10 leading-none">
            Built on these streets.
          </h2>
          <div className="border-l-8 border-brand-orange pl-8 space-y-6 max-w-3xl">
            <p className="text-stone-700 font-medium text-lg leading-relaxed">
              Segura's Towing was founded in 2006 when the Segura family bought a single wheel-lift truck and started answering the phone out of a small lot on W 108th St in Inglewood. What started as a one-truck operation grew slowly and stubbornly over nearly two decades into one of the most trusted tow operations in the South Bay — built on a simple promise: pick up the phone, show up fast, and quote a fair price.
            </p>
            <p className="text-stone-700 font-medium text-lg leading-relaxed">
              Today we run a modern fleet of flatbed and wheel-lift trucks out of the same Inglewood lot, dispatched by Seguras who grew up in this neighborhood. Three generations of the family work the trucks, the phones, and the recovery jobs. We have safely moved more than 10,000 vehicles — everything from daily commuters and luxury exotics to cruiser motorcycles and heavy-duty pickups.
            </p>
            <p className="text-stone-700 font-medium text-lg leading-relaxed">
              We chose to stay small enough that the owner answers the phone at 3 AM — and big enough that there is always a truck within minutes of you. We work with insurance companies, AAA, motor clubs, body shops, dealerships, and apartment complexes throughout Inglewood, Hawthorne, Lennox, Westchester, El Segundo, Manhattan Beach, Torrance, Culver City, and the LAX area. But the driver who shows up still lives in your neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-brand-dark border-b-[8px] border-brand-orange">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center border-2 border-stone-800 bg-stone-900 p-8 shadow-inner">
                  <Icon size={36} className="text-brand-orange mx-auto mb-4 drop-shadow-md" strokeWidth={2.5} />
                  <div className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">{stat.number}</div>
                  <div className="text-sm text-stone-400 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28 px-6 bg-white border-b-[8px] border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-orange text-white font-black uppercase px-4 py-1.5 mb-4 text-sm tracking-widest border-2 border-orange-900">What We Stand For</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter">
              Our promise to every caller.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-zinc-100 border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-4 border-4 border-brand-dark">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-3">{v.title}</h3>
                  <p className="text-stone-600 font-medium leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fleet & Equipment ── */}
      <section className="py-20 md:py-28 px-6 bg-zinc-100 border-b-[8px] border-zinc-200">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block bg-brand-dark text-white font-black uppercase px-4 py-1.5 mb-6 text-sm tracking-widest">Our Fleet</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-10 leading-none">
            The right truck for every job.
          </h2>
          <p className="text-stone-700 font-medium text-lg leading-relaxed max-w-3xl mb-8">
            Not every tow needs the same truck. Our fleet is built so we can match the right equipment to the call — protecting your vehicle and getting the job done safely the first time.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              'Modern hydraulic flatbed trucks for luxury, AWD, and low-clearance vehicles',
              'Wheel-lift wreckers for fast everyday tows and tight parking spaces',
              'Motorcycle-equipped flatbeds with soft straps and wheel chocks',
              '12,000+ lb winches for stuck vehicle recovery and ditch pulls',
              'Dollies for AWD vehicles when flatbeds cannot access tight locations',
              'Mobile fuel and battery delivery vehicles for roadside service',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border-2 border-brand-dark p-4">
                <CheckCircle size={20} className="text-brand-orange shrink-0 mt-1" />
                <span className="font-bold text-brand-dark text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-brand-orange border-b-[8px] border-orange-900 py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">Need a tow right now?</h2>
            <p className="text-xl font-bold text-orange-100 mt-2">15-30 min response. Family-owned. Always answers.</p>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-dark hover:bg-black text-white text-2xl font-black uppercase tracking-widest border-b-[6px] border-stone-900 active:translate-y-1 active:border-b-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
          >
            <Phone size={28} />
            {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* ── Coverage links ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter mb-8 border-l-8 border-brand-orange pl-4">
            Where We Work
          </h3>
          <p className="text-stone-700 font-medium text-lg leading-relaxed mb-6 max-w-3xl">
            Based in Inglewood, we serve the entire South Bay. <Link to="/service-areas" className="text-brand-orange font-bold underline">View all service areas</Link> or browse our full <Link to="/services" className="text-brand-orange font-bold underline">list of services</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
