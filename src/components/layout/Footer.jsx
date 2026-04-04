import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';
import { servicesData } from '../../data/servicesData';

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-8 border-brand-orange py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand + phone */}
          <div className="md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 border-zinc-900 pb-8 md:pb-0 md:pr-8">
            <Link to="/" className="text-2xl font-black text-white uppercase tracking-tighter block mb-4">
              Segura's Towing
            </Link>
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide leading-relaxed mb-6">
              Professional towing serving Inglewood and the surrounding areas. Available 24/7.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 w-full bg-brand-orange text-white font-black text-xl py-4 border-b-[4px] border-orange-900 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest shadow-lg"
            >
              <Phone size={24} strokeWidth={2.5} />
              CALL {PHONE_NUMBER}
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:px-4">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest mb-6 block">Links</span>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3 md:px-4">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest mb-6 block">Services</span>
            <ul className="space-y-4">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-wide transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location + hours */}
          <div className="md:col-span-3">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest mb-6 block">Location</span>
            <div className="space-y-6">
              <div className="bg-zinc-900 border-2 border-zinc-800 p-4 flex items-start gap-4">
                <MapPin size={24} className="text-brand-orange shrink-0" strokeWidth={2.5} />
                <div>
                  <p className="text-sm text-white font-black uppercase tracking-tight">Inglewood, CA</p>
                  <p className="text-sm text-zinc-400 font-bold uppercase tracking-wide mt-1">Ready for Dispatch</p>
                </div>
              </div>
              <div className="bg-zinc-900 border-2 border-zinc-800 p-4 flex items-start gap-4">
                <Clock size={24} className="text-brand-orange shrink-0" strokeWidth={2.5} />
                <p className="text-sm text-white font-black uppercase tracking-tight mt-1">Open 24/7/365</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t-2 border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Segura's Towing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
