import { Phone, ArrowRight, CheckCircle, Shield, Loader2 } from 'lucide-react';
import SEOHead from '../../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../../components/ui/PhoneLink';
import { useFormSubmit } from '../../hooks/useFormSubmit';

export default function ServicePage({ service }) {
  if (!service) return null;
  const Icon = service.icon;
  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useFormSubmit({
    formType: 'service',
    initialData: { name: '', phone: '' },
    servicePageTitle: service.title,
  });

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={`/services/${service.slug}`}
        ogImage={service.heroPhoto}
        ogImageAlt={`${service.title} by Segura's Towing in Inglewood, CA`}
      />

      {/* ── Landing Page Style Hero ── */}
      <section className="relative bg-brand-dark pt-28 pb-16 lg:pt-32 lg:pb-20 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src={service.heroPhoto}
            alt={service.title}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left Column - SEO Copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold tracking-[0.2em] text-xs uppercase px-4 py-2 mb-8 border-2 border-orange-600">
                <Icon size={16} />
                {service.tag}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] uppercase tracking-tighter mb-6">
                {service.headline}
              </h1>

              <p className="text-lg text-stone-300 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {service.intro}
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

            {/* Right Column - Inline Quote Form */}
            <div className="w-full max-w-md lg:max-w-lg mt-10 lg:mt-0 relative">
              <div className="bg-white p-8 lg:p-10 border-4 border-brand-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                <h3 className="text-3xl font-black text-brand-dark mb-2 uppercase tracking-tighter">Request {service.title}</h3>
                <p className="text-stone-600 font-bold mb-6 uppercase tracking-widest text-xs">Enter details below. We reply in under 5 mins.</p>

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
                  <>
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
                      {status === 'error' && (
                        <div className="bg-red-50 border-2 border-red-300 text-red-700 font-bold text-sm px-4 py-3">{errorMessage}</div>
                      )}
                      <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-orange hover:bg-white hover:text-brand-dark text-white font-black tracking-widest uppercase text-lg py-4 mt-6 border-4 border-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-none flex justify-center items-center gap-2 active:translate-y-1 active:shadow-[0px_0px_0_0_rgba(0,0,0,1)] disabled:opacity-60 disabled:pointer-events-none">
                        {status === 'submitting' ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <>Get My Quote <ArrowRight size={20} strokeWidth={3} /></>}
                      </button>
                    </form>
                    <div className="mt-6 flex items-center justify-center gap-2 bg-zinc-100 py-2 border-2 border-brand-dark">
                      <Shield size={16} className="text-brand-dark" />
                      <p className="text-[10px] text-brand-dark font-black uppercase tracking-widest text-center">Transparent Pricing Guarantee</p>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Features SEO Grid ── */}
      <section className="bg-zinc-100 border-b-[8px] border-zinc-200 py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block bg-brand-dark text-white text-sm font-black uppercase tracking-widest px-4 py-1 mb-4">Why Us</span>
            <h2 className="text-4xl sm:text-6xl font-black text-brand-dark uppercase tracking-tighter">
              The Best {service.title} in Inglewood
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {service.features.map((feat, i) => (
              <div key={i} className="bg-white border-4 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-brand-orange text-white flex items-center justify-center border-4 border-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{feat.title}</h3>
                  <p className="mt-3 text-stone-600 font-bold leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Hard CTA ── */}
      <section className="bg-brand-orange border-b-[8px] border-orange-900 py-16">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">Available Now</h2>
            <p className="text-xl font-bold text-orange-100 mt-2">15-30 Minute ETA. Don't waste time.</p>
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

    </>
  );
}
