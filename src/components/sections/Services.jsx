import { Phone, ArrowRight, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_HREF } from '../ui/PhoneLink';
import { servicesData } from '../../data/servicesData';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-100 border-b-[8px] border-zinc-200">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="flex-1">
            <span className="inline-block bg-brand-dark text-white text-sm font-black uppercase tracking-widest px-4 py-1 mb-4">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-none tracking-tighter uppercase">
              Towing & Roadside <br className="hidden md:block" /> In Inglewood.
            </h2>
          </div>
          <p className="text-lg text-stone-600 max-w-md font-bold leading-relaxed border-l-4 border-brand-orange pl-5">
            We provide fast, reliable, and professional towing for any vehicle. Done right. Done safe. Done now.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.slug} className="group bg-white border-4 border-brand-dark flex flex-col transition-all duration-200 ease-in-out shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]">
                {/* Photo strip at top */}
                <div className="relative h-48 overflow-hidden border-b-4 border-brand-dark">
                  <img
                    src={service.photo}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 right-0 bg-brand-dark text-white px-3 py-2 z-10">
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  {/* Title + description */}
                  <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-stone-600 font-medium leading-relaxed flex-1 mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="mb-8 space-y-2 text-sm font-bold text-brand-dark uppercase">
                    <li className="flex items-center gap-2"><CheckSquare size={16} className="text-brand-orange" /> Fast Response</li>
                    <li className="flex items-center gap-2"><CheckSquare size={16} className="text-brand-orange" /> Transparent Pricing</li>
                  </ul>

                  {/* CTA links */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={PHONE_HREF}
                      className="w-full text-center bg-brand-orange hover:bg-brand-orange-hover text-white font-black uppercase tracking-widest py-3.5 border-b-4 border-orange-900 active:border-b-0 active:translate-y-1 transition-all"
                    >
                      Call For Service
                    </a>
                    <Link
                      to={`/services/${service.slug}`}
                      className="w-full text-center bg-brand-dark hover:bg-black text-white font-bold uppercase tracking-wide py-3.5 border-b-4 border-stone-800 active:border-b-0 active:translate-y-1 transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
