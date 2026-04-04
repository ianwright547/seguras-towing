import { useEffect } from 'react';

const SITE = 'https://segurastowing.com';
const DEFAULT_OG_IMAGE = `${SITE}/images/truck-branded-side.jpg`;
const DEFAULT_OG_IMAGE_ALT = "Segura's Towing truck - 24/7 Towing Service in Inglewood, CA";

export default function SEOHead({ title, description, canonical, ogImage, ogImageAlt }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Segura's Towing | Inglewood, CA`
      : "Segura's Towing | 24/7 Towing Service in Inglewood, CA | (310) 490-0246";

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOG = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('description', description);
      setOG('og:description', description);
      setMeta('twitter:description', description);
    }
    if (title) {
      const fullTitle = `${title} | Segura's Towing`;
      setOG('og:title', fullTitle);
      setMeta('twitter:title', fullTitle);
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${SITE}${canonical}`);
      setOG('og:url', `${SITE}${canonical}`);
    }

    // OG Image — use page-specific image or fall back to default
    const imageUrl = ogImage ? `${SITE}${ogImage}` : DEFAULT_OG_IMAGE;
    const imageAlt = ogImageAlt || DEFAULT_OG_IMAGE_ALT;
    setOG('og:image', imageUrl);
    setOG('og:image:alt', imageAlt);
    setMeta('twitter:image', imageUrl);
    setMeta('twitter:image:alt', imageAlt);
  }, [title, description, canonical, ogImage, ogImageAlt]);

  return null;
}
