import { Phone } from 'lucide-react';

const PHONE_NUMBER = '(310) 490-0246';
const PHONE_HREF = 'tel:+13104900246';

export default function PhoneLink({ showIcon = true, className = '', iconSize = 18 }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 font-semibold transition-colors duration-200 ${className}`}
    >
      {showIcon && <Phone size={iconSize} />}
      {PHONE_NUMBER}
    </a>
  );
}

export { PHONE_NUMBER, PHONE_HREF };
