import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, ArrowRight, Loader2, Truck, Wrench, Siren, KeyRound, Zap, ShieldCheck, Star } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { serviceAreas } from '../data/serviceAreas';

const services = [
  { icon: Siren, title: 'Emergency Towing', slug: 'emergency-towing' },
  { icon: Truck, title: 'Flatbed Towing', slug: 'flatbed-towing' },
  { icon: Wrench, title: 'Roadside Assistance', slug: 'roadside-assistance' },
  { icon: KeyRound, title: 'Lockout Service', slug: 'lockout-service' },
  { icon: Zap, title: 'Jump Start', slug: 'jump-start' },
  { icon: ShieldCheck, title: 'Accident Recovery', slug: 'accident-recovery' },
];

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = serviceAreas.find((a) => a.slug === slug);

  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useFormSubmit({
    formType: 'service-area',
    initialData: { name: '', phone: '', service: 'Emergency Towing' },
    servicePageTitle: area ? `Towing in ${area.name}` : 'Service Area',
  });

  if (!area) return <Navigate to="/service-areas" replace />;

  return (
    <>
      <SEOHead
        title={`Towing in ${area.name}, CA`}
        description={`Need a tow truck in ${area.name}? Segura's Towing responds in ${area.responseTime}. 24/7 emergency dispatch, flatbed towing, roadside assistance. Call ${PHONE_NUMBER}.`}
        canonical={`/service-areas/${area.slug}`}
        ogImage="/images/truck-branded-side.jpg"
        ogImageAlt={`Segura's Towing serving ${area.name}, CA`}
      />

      {/* ── Hero ── */}
      <section className="relative bg-brand-dark pt-28 pb-16 lg:pt-32 lg:pb-20 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-19.jpeg"
            alt={`Segura's Towing serving ${area.name}, CA`}
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold tracking-[0.2em] text-xs uppercase px-4 py-2 mb-8 border-2 border-orange-600">
                <MapPin size={16} />
                {area.responseTime} ETA in {area.name}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] uppercase tracking-tighter mb-6">
                Towing in <span className="text-brand-orange">{area.name}, CA</span>
              </h1>

              <p className="text-lg text-stone-300 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {area.intro}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={PHONE_HREF}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-black text-lg py-5 px-10 border-b-[6px] border-orange-900 active:translate-y-1.5 active:border-b-0 transition-all uppercase tracking-widest"
                >
                  <Phone size={24} />
                  CALL {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Right - Quote Form */}
            <div className="w-full max-w-md lg:max-w-lg mt-10 lg:mt-0 relative">
              <div className="bg-white p-8 lg:p-10 border-4 border-brand-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                <h3 className="text-3xl font-black text-brand-dark mb-2 uppercase tracking-tighter">
                  Get a Quote in {area.name}
                </h3>
                <p className="text-stone-600 font-bold mb-6 uppercase tracking-widest text-xs">
                  Reply in under 5 mins. We dispatch immediately.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-2">Request Sent!</h4>
                    <p className="text-stone-600 font-bold mb-6">We'll call you back within 5 minutes.</p>
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-brand-orange font-black uppercase tracking-wider hover:underline">
                      <Phone size={16} /> Call now: {PHONE_NUMBER}
                    </a>
                    <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-stone-400 font-bold uppercase tracking-wider hover:text-brand-dark transition-colors cursor-pointer">Send Another</button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                    <div>
                      <label className="block text-xs font-black uppercase text-brand-dark mb-1 tracking-widest">Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-stone-50 border-4 border-brand-dark px-4 py-3 text-brand-dark font-bold focus:border-brand-orange outline-none transition-none rounded-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-brand-dark mb-1 tracking-widest">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 555-0199" className="w-full bg-stone-50 border-4 border-brand-dark px-4 py-3 text-brand-dark font-bold focus:border-brand-orange outline-none transition-none rounded-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-brand-dark mb-1 tracking-widest">Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-stone-50 border-4 border-brand-dark px-4 py-3 text-brand-dark font-bold focus:border-brand-orange outline-none transition-none rounded-none cursor-pointer">
                        <option>Emergency Towing</option>
                        <option>Flatbed Towing</option>
                        <option>Roadside Assistance</option>
                        <option>Lockout Service</option>
                        <option>Jump Start</option>
                        <option>Accident Recovery</option>
                      </select>
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-50 border-2 border-red-300 text-red-700 font-bold text-sm px-4 py-3">{errorMessage}</div>
                    )}
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-orange hover:bg-white hover:text-brand-dark text-white font-black tracking-widest uppercase text-lg py-4 mt-6 border-4 border-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-none flex justify-center items-center gap-2 active:translate-y-1 active:shadow-[0px_0px_0_0_rgba(0,0,0,1)] disabled:opacity-60 disabled:pointer-events-none">
                      {status === 'submitting' ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <>Get My Quote <ArrowRight size={20} strokeWidth={3} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Service Areas', to: '/service-areas' },
          { label: area.name },
        ]}
      />

      {/* ── Why Local ── */}
      <section className="bg-zinc-100 border-b-[8px] border-zinc-200 py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="bg-white border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-4 border-4 border-brand-dark">
                <Clock size={28} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-1">Response Time</div>
              <div className="text-3xl font-black text-brand-dark uppercase tracking-tighter">{area.responseTime}</div>
            </div>
            <div className="bg-white border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-4 border-4 border-brand-dark">
                <MapPin size={28} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-1">Distance from HQ</div>
              <div className="text-3xl font-black text-brand-dark uppercase tracking-tighter">{area.distance}</div>
            </div>
            <div className="bg-white border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-4 border-4 border-brand-dark">
                <Star size={28} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-stone-500 mb-1">ZIP Codes</div>
              <div className="text-xl font-black text-brand-dark uppercase tracking-tighter break-words">{area.zip}</div>
            </div>
          </div>

          <div className="bg-brand-dark text-white border-4 border-brand-dark p-10 md:p-14 shadow-[12px_12px_0px_0px_rgba(232,114,12,1)]">
            <span className="inline-block bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-1 mb-6 border-2 border-orange-900">
              Why Locals Trust Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              {area.tagline}
            </h2>
            <p className="text-stone-300 font-bold text-lg leading-relaxed">
              {area.whyLocal}
            </p>
          </div>
        </div>
      </section>

      {/* ── Neighborhoods + Landmarks ── */}
      <section className="bg-white border-b-[8px] border-zinc-200 py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <span className="inline-block bg-brand-dark text-white text-xs font-black uppercase tracking-widest px-4 py-1 mb-4">
                Neighborhoods
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-8">
                We Cover Every Corner of {area.name}
              </h2>
              <ul className="space-y-3">
                {area.neighborhoods.map((n) => (
                  <li key={n} className="flex items-center gap-3 bg-zinc-100 border-2 border-brand-dark p-4 font-bold text-brand-dark uppercase tracking-wide">
                    <CheckCircle size={20} className="text-brand-orange shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="inline-block bg-brand-dark text-white text-xs font-black uppercase tracking-widest px-4 py-1 mb-4">
                Local Landmarks
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-8">
                Stuck Near a Landmark?
              </h2>
              <ul className="space-y-3">
                {area.landmarks.map((l) => (
                  <li key={l} className="flex items-center gap-3 bg-zinc-100 border-2 border-brand-dark p-4 font-bold text-brand-dark uppercase tracking-wide">
                    <MapPin size={20} className="text-brand-orange shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Offered ── */}
      <section className="bg-zinc-100 border-b-[8px] border-zinc-200 py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="inline-block bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-1 mb-4 border-2 border-orange-900">
              Services in {area.name}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter">
              Every Service We Offer in {area.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block bg-white border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-4 border-4 border-brand-dark">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-2">{s.title}</h3>
                  <p className="text-stone-600 font-bold uppercase tracking-wide text-sm">Available 24/7 in {area.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hard CTA ── */}
      <section className="bg-brand-orange border-b-[8px] border-orange-900 py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">Stuck in {area.name}?</h2>
            <p className="text-xl font-bold text-orange-100 mt-2">{area.responseTime} ETA. Don't wait on the side of the road.</p>
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

      {/* ── Other Areas ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter mb-8 border-l-8 border-brand-orange pl-4">
            We Also Serve
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/service-areas/${a.slug}`}
                  className="block bg-zinc-100 border-2 border-brand-dark px-4 py-3 font-black text-brand-dark uppercase tracking-wide text-sm hover:bg-brand-orange hover:text-white transition-colors"
                >
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
