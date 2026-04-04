import { Phone } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0e0e0e] text-white py-2 px-4 lg:px-10 border-b border-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-status-available opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-available animate-pulse-dot"></span>
          </span>
          <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase truncate">
            <span className="hidden md:inline">Open 24/7 - Fast Emergency Towing in Inglewood & Surrounding Areas</span>
            <span className="md:hidden">Open 24/7</span>
          </span>
        </div>
        <a
          href={PHONE_HREF}
          className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-white hover:text-brand-blue transition-colors shrink-0 flex items-center gap-1.5"
        >
          <Phone size={12} className="md:hidden" />
          <span className="hidden md:inline">Give Us A Call: {PHONE_NUMBER}</span>
          <span className="md:hidden">{PHONE_NUMBER}</span>
        </a>
      </div>
    </div>
  );
}
