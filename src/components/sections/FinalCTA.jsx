import { Phone, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { useFormSubmit } from '../../hooks/useFormSubmit';

export default function FinalCTA() {
  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useFormSubmit({
    formType: 'finalCta',
    initialData: { name: '', phone: '', service: 'Emergency Towing' },
  });
  return (
    <section className="bg-brand-dark border-t-[12px] border-brand-orange">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: CTA content */}
          <AnimateOnScroll animation="fade-right">
            <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-2 border-2 border-orange-600 mb-6">
              Available 24/7
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-8">
              Local Towing in Inglewood.
            </h2>
            <p className="text-stone-300 text-lg font-bold leading-relaxed mb-10 border-l-4 border-brand-orange pl-4">
              We provide fast dispatch, upfront pricing, and professional service across Inglewood and surrounding areas.
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-4 bg-brand-orange hover:bg-brand-orange-hover text-white py-5 px-8 border-b-[6px] border-orange-900 active:border-b-0 active:translate-y-1.5 transition-all shadow-lg w-full sm:w-auto"
            >
              <Phone size={32} />
              <div>
                <span className="text-2xl md:text-3xl font-black tracking-widest uppercase block">{PHONE_NUMBER}</span>
              </div>
            </a>
          </AnimateOnScroll>

          {/* Right: Quote form */}
          <AnimateOnScroll animation="fade-left">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
              <h3 className="text-3xl font-black text-brand-dark mb-2 tracking-tight">Get A Free Quote</h3>
              <p className="text-stone-500 font-medium mb-8">Fast Response Guaranteed</p>

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
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 555-0199" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-brand-dark font-medium focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none cursor-pointer">
                      <option>Emergency Towing</option>
                      <option>Flatbed Towing</option>
                      <option>Roadside Assistance</option>
                      <option>Lockout Service</option>
                    </select>
                  </div>
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-300 text-red-700 font-bold text-sm px-4 py-3 rounded-xl">{errorMessage}</div>
                  )}
                  <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-dark hover:bg-black text-white font-bold text-xl py-4 mt-6 rounded-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-60 disabled:pointer-events-none">
                    {status === 'submitting' ? <><Loader2 size={24} className="animate-spin" /> Sending...</> : <>Request Quote <ArrowRight size={24} /></>}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
