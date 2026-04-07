import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Visible breadcrumb navigation with JSON-LD BreadcrumbList structured data.
 *
 * @param {Object} props
 * @param {Array<{label: string, to?: string}>} props.items - Breadcrumb trail (last item should not have `to` — it's the current page)
 * @param {string} [props.theme='light'] - 'light' (white bg) or 'dark' (brand-dark bg)
 */
export default function Breadcrumbs({ items = [], theme = 'light' }) {
  if (!items.length) return null;

  // Build full trail starting with Home
  const trail = [{ label: 'Home', to: '/' }, ...items];

  // JSON-LD BreadcrumbList for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      ...(item.to && { item: `https://segurastowing.com${item.to}` }),
    })),
  };

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-brand-dark border-b-4 border-brand-orange' : 'bg-zinc-100 border-b-4 border-zinc-200';
  const textClass = isDark ? 'text-stone-300' : 'text-stone-600';
  const linkClass = isDark
    ? 'text-stone-300 hover:text-brand-orange'
    : 'text-stone-600 hover:text-brand-orange';
  const currentClass = isDark ? 'text-brand-orange' : 'text-brand-dark';
  const separatorClass = isDark ? 'text-stone-600' : 'text-stone-400';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className={`${bgClass} py-3 px-6`}>
        <ol className={`max-w-[1400px] mx-auto flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wider ${textClass}`}>
          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight size={14} className={separatorClass} aria-hidden="true" />}
                {isLast || !item.to ? (
                  <span className={`${currentClass} font-black`} aria-current="page">
                    {idx === 0 && <Home size={14} className="inline mr-1 -mt-0.5" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className={`${linkClass} transition-colors flex items-center gap-1`}>
                    {idx === 0 && <Home size={14} aria-hidden="true" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
