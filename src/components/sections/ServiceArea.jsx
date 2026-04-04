import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { serviceAreas } from '../../data/serviceAreas';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';

// Response times per area (simulated)
const responseTimes = {
  'Inglewood': '10-15 min',
  'Lennox': '10-15 min',
  'Hawthorne': '15-20 min',
  'Westchester': '15-20 min',
  'Ladera Heights': '15-20 min',
  'View Park': '15-25 min',
  'Hyde Park': '15-25 min',
  'Gardena': '20-25 min',
  'Lawndale': '20-25 min',
  'El Segundo': '15-20 min',
  'LAX Area': '15-20 min',
  'South LA': '15-25 min',
  'Culver City': '20-30 min',
  'Manhattan Beach': '20-30 min',
  'Redondo Beach': '25-30 min',
  'Torrance': '25-30 min',
};

export default function ServiceArea() {
  const [activeArea, setActiveArea] = useState(null);

  return (
    <section
      id="service-area"
      className="relative pt-12 pb-10 md:pt-16 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: '#F5F5F3' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-5 mb-10 md:mb-14">
          <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center shrink-0 mt-1">
            <MapPin size={22} className="text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary leading-tight tracking-tight mb-2">
              Serving Inglewood &amp; all of South LA
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-xl">
              15-30 minutes away, no matter where you are. Tap any area to see estimated response times.
            </p>
          </div>
        </div>

        {/* Google Maps + Area picker - side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Google Maps embed */}
          <div className="rounded-xl overflow-hidden border border-black/[0.08] bg-white">
            <iframe
              title="Segura's Towing location in Inglewood, CA"
              src="https://maps.google.com/maps?q=Inglewood,+CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Interactive area picker */}
          <div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => {
                const isActive = activeArea === area.name;
                return (
                  <button
                    key={area.name}
                    onClick={() => setActiveArea(isActive ? null : area.name)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out cursor-pointer min-h-[44px] active:scale-[0.97] ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : area.primary
                          ? 'bg-text-primary text-white hover:bg-brand-blue'
                          : 'bg-black/[0.04] text-text-primary hover:bg-brand-blue/10'
                    }`}
                  >
                    {area.name}
                  </button>
                );
              })}
            </div>

            {/* Response time callout */}
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                activeArea ? 'max-h-32 opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className="bg-white rounded-xl border border-black/[0.08] px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-text-primary">{activeArea}</div>
                  <div className="text-sm text-text-secondary mt-0.5">
                    Est. response: <span className="font-bold text-brand-blue">{responseTimes[activeArea] || '15-30 min'}</span>
                  </div>
                </div>
                <a
                  href={PHONE_HREF}
                  className="shrink-0 bg-brand-blue text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-brand-blue-hover transition-colors duration-200 min-h-[44px] inline-flex items-center gap-2"
                >
                  <Phone size={14} strokeWidth={2} />
                  Call now
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6 pt-5 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-text-secondary">
              <span className="font-bold text-text-primary">Main Office</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-black/20" />
              <span>Inglewood, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
