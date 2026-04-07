import { Link } from 'react-router-dom';
import { Phone, Home, Truck, MapPin, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import { PHONE_HREF, PHONE_NUMBER } from '../components/ui/PhoneLink';

const popularLinks = [
  { to: '/services/emergency-towing', label: 'Emergency Towing', icon: Truck },
  { to: '/services/roadside-assistance', label: 'Roadside Assistance', icon: AlertTriangle },
  { to: '/service-areas/inglewood', label: 'Inglewood Towing', icon: MapPin },
  { to: '/contact', label: 'Contact Us', icon: Phone },
];

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist. Need a tow right now? Call Segura's Towing at (310) 490-0246 — 24/7 dispatch in Inglewood and the South Bay."
        canonical="/404"
      />

      {/* ── Hero ── */}
      <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-40 lg:pb-28 border-b-[12px] border-brand-orange min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img
            src="/images/real-tow-3.jpeg"
            alt="Segura's Towing flatbed truck"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center w-full">
          <div className="inline-block bg-brand-orange text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6 shadow-md border border-brand-dark">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} /> 404 — Page Not Found
            </div>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            Wrong <span className="text-brand-orange">Turn.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-bold max-w-2xl mx-auto uppercase tracking-wide mb-10">
            The page you're looking for has been towed away — but we can still help you get where you need to go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-xl font-black uppercase tracking-widest border-b-[6px] border-orange-900 active:translate-y-1 active:border-b-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
            >
              <Phone size={24} />
              Call {PHONE_NUMBER}
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-zinc-100 text-brand-dark text-xl font-black uppercase tracking-widest border-b-[6px] border-stone-400 active:translate-y-1 active:border-b-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
            >
              <Home size={24} />
              Back Home
            </Link>
          </div>
        </div>
      </section>

      {/* ── Popular Links ── */}
      <section className="py-20 md:py-24 px-6 bg-zinc-100 border-b-[8px] border-zinc-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-dark text-white font-black uppercase px-4 py-1.5 mb-4 text-sm tracking-widest">Popular Pages</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
              Try one of these instead.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group bg-white border-4 border-brand-dark p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,88,12,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center mb-3 mx-auto border-4 border-brand-dark group-hover:bg-brand-dark transition-colors">
                    <Icon size={26} />
                  </div>
                  <span className="text-sm md:text-base font-black text-brand-dark uppercase tracking-tight">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sitemap Links ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter mb-8 border-l-8 border-brand-orange pl-4">
            Or browse by section
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-widest mb-3 border-b-2 border-brand-orange pb-2">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">All Services</Link></li>
                <li><Link to="/services/emergency-towing" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Emergency Towing</Link></li>
                <li><Link to="/services/flatbed-towing" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Flatbed Towing</Link></li>
                <li><Link to="/services/roadside-assistance" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Roadside Assistance</Link></li>
                <li><Link to="/services/lockout-service" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Lockout Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-widest mb-3 border-b-2 border-brand-orange pb-2">Service Areas</h4>
              <ul className="space-y-2">
                <li><Link to="/service-areas" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">All Areas</Link></li>
                <li><Link to="/service-areas/inglewood" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Inglewood</Link></li>
                <li><Link to="/service-areas/hawthorne" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Hawthorne</Link></li>
                <li><Link to="/service-areas/westchester" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Westchester</Link></li>
                <li><Link to="/service-areas/lax-area" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">LAX Area</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black text-brand-dark uppercase tracking-widest mb-3 border-b-2 border-brand-orange pb-2">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Blog</Link></li>
                <li><Link to="/" className="text-stone-700 font-bold hover:text-brand-orange transition-colors">Home</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
