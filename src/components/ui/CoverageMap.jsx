import { useState, useEffect, useRef } from 'react';

const HUB = { x: 200, y: 200, name: 'Inglewood' };

const areas = [
  { name: 'Culver City', x: 165, y: 75 },
  { name: 'Westchester', x: 105, y: 125 },
  { name: 'Ladera Heights', x: 235, y: 105 },
  { name: 'View Park', x: 275, y: 125 },
  { name: 'Hyde Park', x: 305, y: 165 },
  { name: 'South LA', x: 315, y: 225 },
  { name: 'LAX Area', x: 75, y: 185 },
  { name: 'Lennox', x: 148, y: 252 },
  { name: 'Hawthorne', x: 200, y: 292 },
  { name: 'Gardena', x: 265, y: 315 },
  { name: 'Lawndale', x: 178, y: 335 },
  { name: 'El Segundo', x: 68, y: 252 },
  { name: 'Manhattan Beach', x: 55, y: 335 },
  { name: 'Redondo Beach', x: 78, y: 385 },
  { name: 'Torrance', x: 155, y: 392 },
];

// Distance from hub
function dist(a) {
  return Math.sqrt((a.x - HUB.x) ** 2 + (a.y - HUB.y) ** 2);
}

// Sort by distance for stagger
const sorted = [...areas].sort((a, b) => dist(a) - dist(b));
const maxDist = Math.max(...areas.map(dist));

const RINGS = [80, 140, 210];

export default function CoverageMap({ className = '' }) {
  const ref = useRef(null);
  const [active, setActive] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg viewBox="0 0 400 450" className="w-full h-auto" role="img" aria-label="Coverage map showing service areas around Inglewood">
        {/* Expanding coverage rings */}
        {RINGS.map((r, i) => (
          <circle
            key={r}
            cx={HUB.x}
            cy={HUB.y}
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-brand-orange"
            strokeWidth={1}
            strokeDasharray="4 4"
            opacity={revealed ? 0.15 : 0}
            style={{
              transition: `opacity 0.4s ease-out ${i * 0.15}s, r 0.6s ease-out ${i * 0.15}s`,
              r: revealed ? r : 0,
            }}
          />
        ))}

        {/* Coverage fill - subtle gradient circle */}
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={revealed ? maxDist + 20 : 0}
          fill="url(#coverageGrad)"
          style={{ transition: 'r 1s ease-out 0.2s' }}
        />

        <defs>
          <radialGradient id="coverageGrad">
            <stop offset="0%" stopColor="#EA580C" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#EA580C" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines from hub to each area */}
        {sorted.map((area, i) => {
          const isActive = active === area.name;
          const delay = (dist(area) / maxDist) * 0.6 + 0.2;
          return (
            <line
              key={`line-${area.name}`}
              x1={HUB.x}
              y1={HUB.y}
              x2={revealed ? area.x : HUB.x}
              y2={revealed ? area.y : HUB.y}
              stroke="#EA580C"
              strokeWidth={isActive ? 1.5 : 0.5}
              opacity={revealed ? (isActive ? 0.5 : 0.1) : 0}
              style={{ transition: `all 0.4s ease-out ${delay}s` }}
            />
          );
        })}

        {/* Area dots */}
        {sorted.map((area) => {
          const isActive = active === area.name;
          const delay = (dist(area) / maxDist) * 0.6 + 0.3;
          return (
            <g
              key={area.name}
              className="cursor-pointer"
              onClick={() => setActive(isActive ? null : area.name)}
              role="button"
              aria-label={area.name}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(isActive ? null : area.name)}
            >
              {/* Hit area - larger invisible circle for touch (26r → 44px+ at mobile) */}
              <circle cx={area.x} cy={area.y} r={26} fill="transparent" />

              {/* Visible dot */}
              <circle
                cx={area.x}
                cy={area.y}
                r={isActive ? 6 : 4}
                fill={isActive ? '#EA580C' : '#94A3B8'}
                opacity={revealed ? 1 : 0}
                style={{ transition: `all 0.2s ease-out ${delay}s` }}
              />

              {/* Label */}
              <text
                x={area.x}
                y={area.y - 10}
                textAnchor="middle"
                className="fill-current text-stone-500"
                fontSize={isActive ? 11 : 9}
                fontWeight={isActive ? 700 : 500}
                opacity={revealed ? (isActive ? 1 : 0.6) : 0}
                style={{ transition: `all 0.2s ease-out ${delay}s` }}
              >
                {area.name}
              </text>
            </g>
          );
        })}

        {/* Hub - Inglewood */}
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={revealed ? 8 : 0}
          fill="#EA580C"
          style={{ transition: 'r 0.3s ease-out' }}
        />
        {/* Hub pulse ring */}
        {revealed && (
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r={8}
            fill="none"
            stroke="#EA580C"
            strokeWidth={2}
            className="animate-pulse-ring"
            opacity={0.4}
          />
        )}
        <text
          x={HUB.x}
          y={HUB.y - 16}
          textAnchor="middle"
          className="fill-current text-brand-dark"
          fontSize={12}
          fontWeight={800}
          opacity={revealed ? 1 : 0}
          style={{ transition: 'opacity 0.3s ease-out' }}
        >
          INGLEWOOD
        </text>
        <text
          x={HUB.x}
          y={HUB.y + 24}
          textAnchor="middle"
          fontSize={8}
          fontWeight={600}
          opacity={revealed ? 0.5 : 0}
          className="fill-current text-brand-orange"
          style={{ transition: 'opacity 0.3s ease-out 0.3s' }}
        >
          HQ - 15-30 MIN RADIUS
        </text>
      </svg>

      {/* Active area callout */}
      {active && (
        <div className="absolute bottom-4 left-4 right-4 bg-brand-dark text-white border-4 border-brand-orange shadow-[8px_8px_0_0_rgba(0,0,0,1)] px-4 py-3 flex items-center justify-between">
          <div>
            <div className="font-bold text-brand-dark text-sm">{active}</div>
            <div className="text-stone-500 text-sm">15-30 min response time</div>
          </div>
          <a
            href="tel:+13104900246"
            className="bg-brand-blue text-white text-sm font-bold px-4 py-3 rounded-lg hover:bg-brand-blue-hover transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Call now
          </a>
        </div>
      )}
    </div>
  );
}
