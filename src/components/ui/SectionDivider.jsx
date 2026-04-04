export default function SectionDivider({
  fromColor = '#1C1917',
  toColor = '#292524',
  direction = 'left',
  height = 80,
  className = '',
}) {
  // "left" = diagonal falls left-to-right (top-left corner is from, bottom-right is to)
  // "right" = diagonal falls right-to-left
  const d =
    direction === 'left'
      ? 'M0,0 L100,0 L100,100 L0,0'
      : 'M0,0 L100,0 L0,100 L0,0';

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, marginTop: -1, marginBottom: -1 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <rect width="100" height="100" fill={toColor} />
        <path d={d} fill={fromColor} />
      </svg>
    </div>
  );
}
