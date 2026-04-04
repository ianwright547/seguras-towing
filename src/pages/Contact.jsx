import { Phone, MapPin, Clock, ArrowRight, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';
import { useFormSubmit } from '../hooks/useFormSubmit';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(310) 490-0246',
    href: PHONE_HREF,
    note: 'Tap to call - answered 24/7',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Inglewood, CA',
    href: null,
    note: 'Dispatching across the South Bay',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24/7/365',
    href: null,
    note: 'We never close',
  },
];

export default function Contact() {
  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useFormSubmit({
    formType: 'contact',
    initialData: { name: '', phone: '', service: 'Emergency Towing', message: '' },
  });

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact Segura's Towing in Inglewood, CA. Call (310) 490-0246 for 24/7 towing and roadside assistance."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-1.jpeg"
            alt="Contact Segura's Towing"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-block bg-red-600 text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-md border border-red-500">
            We Answer 24/7
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Contact Segura's Towing
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide">
            Stranded? Need a quote? We are here to help, day or night.
          </p>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="px-6 -mt-10 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-brand-blue border-4 border-brand-dark p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 border-4 border-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <AlertTriangle size={32} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Need help NOW?</h2>
                <p className="text-brand-blue-light font-bold text-sm tracking-wide uppercase mt-1">We dispatch immediately. 15-30 min response.</p>
              </div>
            </div>
            <a
              href={PHONE_HREF}
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-white hover:text-brand-dark text-white font-black py-4 px-10 text-xl border-4 border-brand-dark transition-all uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
            >
              <Phone size={24} />
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-32 px-6 bg-zinc-100 border-b-[8px] border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Contact Info + Map */}
            <div>
              <span className="inline-block bg-brand-dark text-white font-black uppercase px-4 py-1.5 mb-6 text-sm tracking-widest">Our Info</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-none tracking-tighter uppercase mb-10">
                Contact
              </h2>

              <div className="space-y-6 mb-12">
                {contactDetails.map((item) => (
                  <div key={item.label} className="bg-white border-4 border-brand-dark p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-start gap-6">
                    <div className="w-16 h-16 bg-brand-orange text-white flex items-center justify-center shrink-0 border-4 border-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-stone-500 uppercase tracking-widest mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-black text-2xl text-brand-dark hover:text-brand-orange transition-colors uppercase tracking-tight">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-black text-2xl text-brand-dark uppercase tracking-tight">{item.value}</div>
                      )}
                      <div className="text-sm font-bold text-stone-400 mt-1 uppercase tracking-wide">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Area */}
              <div className="border-4 border-brand-dark bg-brand-orange p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Service Area</h3>
                <p className="text-brand-dark font-bold text-lg uppercase tracking-widest">
                  We cover all of Inglewood, South LA, and the greater South Bay region. A truck is always nearby.
                </p>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-stone-100 relative h-fit">
                <h3 className="text-3xl font-black text-brand-dark mb-2 tracking-tight">Fast Quote Form</h3>
                <p className="text-stone-500 font-medium mb-8">Fill out the form below. We reply in 5 minutes.</p>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-black text-brand-dark tracking-tight mb-2">Request Sent!</h4>
                    <p className="text-stone-600 font-medium mb-6">We'll call you back within 5 minutes.</p>
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline">
                      <Phone size={16} /> Or call now: {PHONE_NUMBER}
                    </a>
                    <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-stone-400 font-medium hover:text-brand-dark transition-colors cursor-pointer">Send Another</button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 555-1234" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none cursor-pointer">
                        <option>Emergency Towing</option>
                        <option>Flatbed Towing</option>
                        <option>Roadside Assistance</option>
                        <option>Lockout Service</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Message (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Vehicle type, location, situation..." className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none" />
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-300 text-red-700 font-bold text-sm px-4 py-3 rounded-xl">{errorMessage}</div>
                    )}
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-dark hover:bg-black text-white font-bold text-xl py-4 mt-6 rounded-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-60 disabled:pointer-events-none">
                      {status === 'submitting' ? <><Loader2 size={24} className="animate-spin" /> Sending...</> : <>Send Request <ArrowRight size={24} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
