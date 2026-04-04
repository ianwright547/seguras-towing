import { Truck, KeyRound, Wrench, Zap, ShieldAlert, MapPin } from 'lucide-react';
import AnimatedList from '../ui/AnimatedList';

const towEvents = [
  { name: 'Patricia W.', initials: 'PW', action: 'Emergency tow - 105 Fwy', icon: Truck, time: '2 min ago', color: '#2563EB' },
  { name: 'Michael D.', initials: 'MD', action: 'Lockout service - The Forum', icon: KeyRound, time: '8 min ago', color: '#16A34A' },
  { name: 'Carlos R.', initials: 'CR', action: 'Flatbed tow - Mustang', icon: Truck, time: '14 min ago', color: '#F59E0B' },
  { name: 'James T.', initials: 'JT', action: 'Accident recovery - Inglewood', icon: ShieldAlert, time: '22 min ago', color: '#EF4444' },
  { name: 'Maria G.', initials: 'MG', action: 'Breakdown tow - 405 Fwy', icon: Truck, time: '31 min ago', color: '#8B5CF6' },
  { name: 'Lisa H.', initials: 'LH', action: 'Classic car flatbed transport', icon: Truck, time: '45 min ago', color: '#EC4899' },
  { name: 'Robert K.', initials: 'RK', action: 'LAX area tow - late night', icon: MapPin, time: '1 hr ago', color: '#14B8A6' },
  { name: 'Angela M.', initials: 'AM', action: 'Roadside assist - Hawthorne', icon: Wrench, time: '1 hr ago', color: '#F97316' },
  { name: 'Tony S.', initials: 'TS', action: 'Vehicle transport to shop', icon: Truck, time: '2 hrs ago', color: '#6366F1' },
  { name: 'Diana P.', initials: 'DP', action: 'Jump start - dead battery', icon: Zap, time: '2 hrs ago', color: '#0EA5E9' },
  { name: 'Marcus J.', initials: 'MJ', action: 'Flatbed tow - South LA', icon: Truck, time: '3 hrs ago', color: '#2563EB' },
  { name: 'Sandra L.', initials: 'SL', action: 'Emergency tow - Lennox', icon: Truck, time: '3 hrs ago', color: '#16A34A' },
];

// Double for looping
const allEvents = [...towEvents, ...towEvents];

function TowNotification({ name, initials, action, icon: Icon, time, color }) {
  return (
    <div className="flex items-center gap-4 bg-brand-dark-lighter border border-white/[0.06] rounded-xl px-4 py-3.5 w-full">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-[11px]"
        style={{ backgroundColor: color + '18', color }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white truncate">
          <span className="font-semibold">{name}</span>
          <span className="text-white/40"> - {action}</span>
        </p>
        <p className="text-xs text-white/25 mt-0.5">{time}</p>
      </div>
      <Icon size={15} className="text-white/15 shrink-0" strokeWidth={1.5} />
    </div>
  );
}

export default function LiveFeed() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-dark">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-status-available animate-pulse-dot" />
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Recent Activity</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            We stay busy
          </h2>
        </div>

        <div className="relative h-[380px] overflow-hidden">
          <AnimatedList delay={2500}>
            {allEvents.map((event, i) => (
              <TowNotification key={i} {...event} />
            ))}
          </AnimatedList>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark pointer-events-none" />
        </div>

        <p className="text-center text-[11px] text-white/15 mt-4 max-w-xs mx-auto leading-relaxed">
          Simulated activity inspired by past service calls. Not real-time data.
        </p>
      </div>
    </section>
  );
}
