import { useEffect } from 'react';

export default function SEOHead({ title, description, canonical }) {
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
    }
    if (title) {
      setOG('og:title', `${title} | Segura's Towing`);
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `https://segurastowing.com${canonical}`);
      setOG('og:url', `https://segurastowing.com${canonical}`);
    }
  }, [title, description, canonical]);

  return null;
}
