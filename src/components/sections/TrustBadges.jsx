import { Star, ShieldCheck, Award } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-gradient-to-r from-brand-dark to-[#111] border-b-4 border-zinc-800 text-white py-12 px-4 shadow-inner">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

          <div className="flex-1 md:border-r border-zinc-700 md:pr-8">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-yellow-400 fill-yellow-400 drop-shadow-md" />
              ))}
            </div>
            <p className="text-3xl font-black uppercase tracking-tight">4.9 on Google</p>
            <p className="text-stone-400 font-bold tracking-wide uppercase text-sm mt-1">Based on 50+ Reviews</p>
          </div>

          <div className="flex-1 md:border-r border-zinc-700 md:px-8 flex flex-col items-center md:items-start">
            <ShieldCheck size={36} className="text-brand-orange mb-2 drop-shadow-lg" strokeWidth={2.5} />
            <p className="text-2xl font-black uppercase tracking-tight">Fully Licensed</p>
            <p className="text-stone-400 font-bold tracking-wide uppercase text-sm mt-1">Bonded & Insured</p>
          </div>

          <div className="flex-1 md:pl-8 flex flex-col items-center md:items-start">
            <Award size={36} className="text-brand-orange mb-2 drop-shadow-lg" strokeWidth={2.5} />
            <p className="text-2xl font-black uppercase tracking-tight">Professional Towing</p>
            <p className="text-stone-400 font-bold tracking-wide uppercase text-sm mt-1">Inglewood & South Bay</p>
          </div>

        </div>
      </div>
    </section>
  );
}
