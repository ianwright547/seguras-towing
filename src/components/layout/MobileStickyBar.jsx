import { Phone } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-lg">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-3 bg-brand-blue text-white font-bold text-lg py-4 px-6 hover:bg-brand-blue-hover transition-colors active:scale-[0.98]"
      >
        <Phone size={22} className="animate-pulse" />
        Call Now - {PHONE_NUMBER}
      </a>
    </div>
  );
}
