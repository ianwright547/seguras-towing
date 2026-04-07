import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';
import { serviceAreas } from '../data/serviceAreas';

const responseTimes = {
  'Inglewood': '10-15 min',
  'Lennox': '10-15 min',
  'Hawthorne': '15-20 min',
  'Westchester': '15-20 min',
  'Ladera Heights': '15-20 min',
  'View Park': '15-25 min',
  'Hyde Park': '15-25 min',
  'Gardena': '20-25 min',
  'Lawndale': '20-25 min',
  'El Segundo': '15-20 min',
  'LAX Area': '15-20 min',
  'South LA': '15-25 min',
  'Culver City': '20-30 min',
  'Manhattan Beach': '20-30 min',
  'Redondo Beach': '25-30 min',
  'Torrance': '25-30 min',
};

export default function ServiceAreasPage() {
  const primaryAreas = serviceAreas.filter((a) => a.primary);
  const secondaryAreas = serviceAreas.filter((a) => !a.primary);

  return (
    <>
      <SEOHead
        title="Towing Service Areas in Inglewood & the South Bay"
        description="Segura's Towing serves Inglewood, Hawthorne, Lennox, Gardena, Lawndale, El Segundo, LAX, and all of South LA. 10-30 minute response times. Call (310) 490-0246."
        canonical="/service-areas"
      />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-19.jpeg"
            alt="Segura's tow truck serving the South Bay"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-brand-dark">
            <div className="flex items-center gap-2"><MapPin size={16} /> Coverage Zone</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">
            Towing Service Areas in Inglewood & the South Bay
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            From Inglewood to the South Bay, we have you covered. Fast response times across 16+ neighborhoods.
          </p>
        </div>
      </section>

      {/* Legend Block */}
      <section className="bg-zinc-100 border-b-[8px] border-brand-dark py-6 z-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 font-black text-brand-dark text-sm uppercase tracking-widest text-center flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3"><span className="w-4 h-4 bg-green-500 border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></span> Primary (10 to 15 Min)</div>
          <div className="flex items-center gap-3"><span className="w-4 h-4 bg-blue-500 border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></span> Nearby (15 to 20 Min)</div>
          <div className="flex items-center gap-3"><span className="w-4 h-4 bg-amber-500 border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></span> Extended (20 to 30 Min)</div>
        </div>
      </section>

      {/* Intro / About our coverage */}
      <section className="bg-white border-b-[8px] border-zinc-200 py-16 md:py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="inline-block bg-brand-dark text-white text-xs font-black uppercase tracking-widest px-4 py-1 mb-4">Where We Tow</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-6">
            Local Towing Across Inglewood, the South Bay & the LAX Area
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-stone-700 font-medium leading-relaxed text-lg">
            <p>
              Segura's Towing is dispatched from <strong>3519 W 108th St in Inglewood</strong>, which puts our trucks within a 15-30 minute drive of every neighborhood we cover. Because we're a hometown shop and not a national franchise, our drivers know the surface streets, the freeway shortcuts off the I-405, the I-105, and the I-110, and the fastest way to reach you when traffic backs up around SoFi Stadium, the Forum, or LAX.
            </p>
            <p>
              We tow daily across <strong>Hawthorne, Lennox, Westchester, Ladera Heights, View Park, Hyde Park, Gardena, Lawndale, El Segundo, the LAX area, South LA, Culver City, Manhattan Beach, Redondo Beach, and Torrance</strong>. Whether you're stranded on the freeway shoulder, locked out in a parking lot, or dealing with a dead battery in your driveway, you get the same family-owned service no matter which city you're calling from.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-100 border-4 border-brand-dark p-5 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="text-3xl font-black text-brand-orange">16+</div>
              <div className="text-xs font-black uppercase tracking-widest text-brand-dark mt-1">Cities Covered</div>
            </div>
            <div className="bg-zinc-100 border-4 border-brand-dark p-5 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="text-3xl font-black text-brand-orange">10-30</div>
              <div className="text-xs font-black uppercase tracking-widest text-brand-dark mt-1">Min ETA</div>
            </div>
            <div className="bg-zinc-100 border-4 border-brand-dark p-5 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="text-3xl font-black text-brand-orange">24/7</div>
              <div className="text-xs font-black uppercase tracking-widest text-brand-dark mt-1">Dispatch</div>
            </div>
            <div className="bg-zinc-100 border-4 border-brand-dark p-5 text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="text-3xl font-black text-brand-orange">2006</div>
              <div className="text-xs font-black uppercase tracking-widest text-brand-dark mt-1">Family-Owned Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Area Blocks */}
      <section className="py-20 md:py-32 px-6 bg-white border-b-[8px] border-zinc-200">
        <div className="max-w-[1200px] mx-auto">
          {primaryAreas.map((area) => (
            <div key={area.name} className="bg-zinc-100 border-4 border-brand-dark p-8 md:p-12 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter">{area.name}</h2>
                  <span className="bg-brand-orange text-white text-xs font-black px-4 py-2 uppercase tracking-widest border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    {responseTimes[area.name]} ETA
                  </span>
                </div>
                <p className="text-stone-600 font-bold text-lg max-w-lg mb-6 leading-relaxed uppercase tracking-wide">
                  Our main coverage zone. We know every street and every neighborhood. A truck is always nearby.
                </p>
                <Link
                  to={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-orange font-black uppercase tracking-widest text-sm border-b-4 border-brand-orange pb-1 transition-colors"
                >
                  View {area.name} Page <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </div>
              <a
                href={PHONE_HREF}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brand-dark hover:bg-black text-white font-black py-5 px-10 text-xl border-b-[6px] border-stone-800 transition-all uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] active:translate-y-1 active:border-b-0"
              >
                <Phone size={24} />
                Call Now
              </a>
            </div>
          ))}

          <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 mt-20 border-l-8 border-brand-orange pl-4">All Service Areas</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryAreas.map((area) => {
              const time = responseTimes[area.name];
              const isFast = parseInt(time) <= 15;
              const isMed = parseInt(time) <= 20 && !isFast;

              return (
                <div key={area.name} className="bg-white border-4 border-brand-dark p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-black text-2xl text-brand-dark uppercase tracking-tight">{area.name}</h4>
                    <div className={`w-4 h-4 border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(0,0,0,1)] shrink-0 ${isFast ? 'bg-green-500' : isMed ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-stone-600">
                    <Clock size={16} />
                    <span className="font-bold text-sm uppercase tracking-widest">{time || '15 to 30 min'}</span>
                  </div>
                  <Link
                    to={`/service-areas/${area.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-orange text-white font-black py-3 mb-3 border-2 border-brand-dark uppercase tracking-widest transition-colors text-sm"
                  >
                    View Page <ArrowRight size={16} strokeWidth={3} />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="w-full inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-brand-orange hover:text-white text-brand-dark font-black py-3 border-2 border-brand-dark uppercase tracking-widest transition-colors text-sm mt-auto"
                  >
                    <Phone size={16} /> Call Dispatch
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 px-6 bg-brand-dark text-white relative border-b-[8px] border-brand-orange">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1">
            <div className="inline-block bg-brand-orange text-white font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-orange-900 mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
              Our Service Range
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">Based in Inglewood.<br />Covering the South Bay.</h2>
            <p className="text-stone-300 font-bold text-base mb-10 leading-relaxed uppercase tracking-wide">
              Do not see your area listed? Call us anyway. We regularly dispatch outside our standard coverage zone and guarantee an accurate ETA securely.
            </p>

            <div className="space-y-6">
              <div className="bg-stone-900 p-6 border-4 border-brand-dark shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange border-2 border-brand-dark flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-black text-sm text-white uppercase tracking-widest">Location</p>
                  <p className="text-xs text-brand-orange font-bold mt-1 uppercase tracking-wider">Inglewood, CA</p>
                </div>
              </div>
              <div className="bg-stone-900 p-6 border-4 border-brand-dark shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange border-2 border-brand-dark flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-black text-sm text-white uppercase tracking-widest">Availability</p>
                  <p className="text-xs text-brand-orange font-bold mt-1 uppercase tracking-wider">Open 24/7/365</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border-8 border-brand-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-brand-orange p-12 flex flex-col justify-center items-center text-center">
            <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">Always Close By</h3>
            <p className="text-2xl text-brand-dark font-bold uppercase tracking-widest max-w-lg">
              We operate exclusively in the field, with trucks stationed throughout Inglewood and the South Bay area for immediate dispatch.
            </p>
          </div>

        </div>
      </section>

    </>
  );
}
