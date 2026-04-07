import { ArrowRight, Phone, CheckCircle, Shield, Clock, Loader2 } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';
import { useFormSubmit } from '../../hooks/useFormSubmit';

export default function Hero() {
  const { formData, status, errorMessage, handleChange, handleSubmit, resetForm } = useFormSubmit({
    formType: 'hero',
    initialData: { name: '', phone: '', service: 'Emergency Towing' },
  });
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/real-tow-10.jpeg"
          width="1920"
          height="1080"
          className="w-full h-full object-cover opacity-20 mix-blend-lighten"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Column - Sales Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-brand-orange text-white font-bold tracking-[0.2em] text-xs uppercase px-4 py-2 mb-8 border-2 border-orange-600">
              24/7 Emergency Dispatch Available Now
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] uppercase tracking-tighter mb-6 lg:mb-8">
              24/7 Towing in <span className="text-brand-orange">Inglewood, CA.</span> Fast & Safe.
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Inglewood's most trusted towing service. No hidden fees, lightning-fast response times, and a team running 24/7. Don't wait on the side of the road.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-black text-lg py-5 px-10 border-b-[6px] border-orange-900 active:translate-y-1.5 active:border-b-0 transition-all uppercase tracking-widest"
              >
                <Phone size={24} className="animate-pulse" />
                CALL {PHONE_NUMBER}
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-white text-[15px] font-bold uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-orange" size={24} />
                Fast ETA
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-brand-orange" size={24} />
                Licensed
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-brand-orange" size={24} />
                Open 24/7
              </div>
            </div>
          </div>

          {/* Right Column - Prominent Inline Lead Form */}
          <div className="w-full max-w-md lg:max-w-lg mt-10 lg:mt-0">
            <div className="bg-white p-8 lg:p-10 border-t-8 border-brand-orange shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <div className="absolute -top-5 -right-5 bg-red-600 text-white text-sm font-black uppercase px-4 py-2 rotate-[12deg] shadow-xl border border-white">
                Free Quote!
              </div>
              <h3 className="text-3xl font-black text-brand-dark mb-2 uppercase tracking-tighter">Request A Tow Now</h3>
              <p className="text-stone-600 font-semibold mb-6">Enter details below. We reply in under 5 mins.</p>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-2">Request Sent!</h4>
                  <p className="text-stone-600 font-bold mb-6">We'll call you back within 5 minutes.</p>
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-brand-orange font-black uppercase tracking-wider hover:underline">
                    <Phone size={16} /> Or call now: {PHONE_NUMBER}
                  </a>
                  <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-stone-400 font-bold uppercase tracking-wider hover:text-brand-dark transition-colors cursor-pointer">Send Another</button>
                </div>
              ) : (
                <>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-stone-100 border-2 border-stone-200 px-4 py-3.5 text-brand-dark font-bold focus:border-brand-orange focus:bg-white focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(310) 555-0199" className="w-full bg-stone-100 border-2 border-stone-200 px-4 py-3.5 text-brand-dark font-bold focus:border-brand-orange focus:bg-white focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1 tracking-wider">Service Required</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-stone-100 border-2 border-stone-200 px-4 py-3.5 text-brand-dark font-bold focus:border-brand-orange focus:bg-white focus:outline-none transition-colors appearance-none outline-none">
                        <option>Emergency Towing</option>
                        <option>Flatbed Towing</option>
                        <option>Roadside Assistance</option>
                        <option>Lockout Service</option>
                      </select>
                    </div>
                    {status === 'error' && (
                      <div className="bg-red-50 border-2 border-red-300 text-red-700 font-bold text-sm px-4 py-3">{errorMessage}</div>
                    )}
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-dark hover:bg-black text-white font-black uppercase tracking-widest text-lg py-5 mt-4 transition-colors flex justify-center items-center gap-2 border-b-[6px] border-stone-800 active:border-b-0 active:translate-y-1.5 shadow-lg disabled:opacity-60 disabled:pointer-events-none">
                      {status === 'submitting' ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <>Get My Quote <ArrowRight size={20} strokeWidth={3} /></>}
                    </button>
                  </form>
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <Shield size={16} className="text-green-600" />
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-wider text-center">100% Secure & Confidential</p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
