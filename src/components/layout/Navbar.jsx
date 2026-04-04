import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';
import { servicesData } from '../../data/servicesData';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'About', to: '/about' },
  { label: 'Areas', to: '/service-areas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const scrollUpDistance = useRef(0);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y > lastScrollY.current) {
        scrollUpDistance.current = 0;
        if (y > 80) setHidden(true);
      } else {
        scrollUpDistance.current += lastScrollY.current - y;
        if (scrollUpDistance.current > 60) setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const isActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-4 bg-white border-b border-stone-200 transition-all duration-200 ease-out ${scrolled ? 'shadow-sm' : ''
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl md:text-2xl font-black text-text-primary tracking-tighter uppercase shrink-0">
        Segura&apos;s Towing
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.label} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 font-bold tracking-tight uppercase text-sm transition-colors cursor-pointer ${pathname.startsWith('/services')
                    ? 'text-brand-orange'
                    : 'text-text-primary hover:text-brand-orange'
                  }`}
              >
                {link.label}
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                {pathname.startsWith('/services') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
                )}
              </button>

              {/* Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                <div className="py-2">
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-off transition-colors duration-150"
                    >
                      <s.icon size={15} className="text-brand-orange shrink-0" strokeWidth={1.5} />
                      {s.title}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-stone-200 p-3">
                  <Link
                    to="/services"
                    className="block text-center text-xs font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.label}
              to={link.to}
              className={`relative font-bold tracking-tight uppercase text-sm transition-colors ${isActive(link.to)
                  ? 'text-brand-orange'
                  : 'text-text-primary hover:text-brand-orange'
                }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
              )}
            </Link>
          )
        ))}
      </div>

      <a
        href={PHONE_HREF}
        className="hidden lg:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-black py-4 px-8 border-b-[4px] border-orange-900 active:translate-y-1 active:border-b-0 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase tracking-widest text-xs"
      >
        Call Now
      </a>

      {/* Mobile Right */}
      <div className="flex items-center gap-3 lg:hidden">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center w-12 h-12 bg-brand-orange text-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
          aria-label="Call now"
        >
          <Phone size={18} />
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white border-t border-stone-200 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map(link => (
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-base font-bold uppercase tracking-wide transition-colors cursor-pointer ${pathname.startsWith('/services')
                        ? 'text-brand-orange'
                        : 'text-text-primary hover:text-brand-orange'
                      }`}
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                    <div className="pl-8 space-y-1 pb-2">
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2.5 py-2 text-sm text-text-secondary hover:text-brand-orange transition-colors"
                        >
                          <s.icon size={14} strokeWidth={1.5} />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-base font-bold uppercase tracking-wide transition-colors ${isActive(link.to)
                      ? 'text-brand-orange'
                      : 'text-text-primary hover:text-brand-orange'
                    }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-3 border-t border-stone-200">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-black text-lg px-6 py-4 uppercase tracking-widest border-b-[4px] border-orange-900 active:translate-y-1 active:border-b-0 transition-all"
              >
                <Phone size={20} />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
