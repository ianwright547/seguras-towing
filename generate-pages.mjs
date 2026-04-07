/**
 * Post-build script: generates route-specific HTML files with proper
 * meta tags, JSON-LD structured data, and noscript fallback content
 * so that AI crawlers and search engines can index every page.
 *
 * Run after `vite build`:  node generate-pages.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { serviceAreas } from './src/data/serviceAreas.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');

if (!existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Run "vite build" first.');
  process.exit(1);
}

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

const SITE = 'https://segurastowing.com';
const BIZ = "Segura's Towing";
const PHONE = '(310) 490-0246';
const TEL = 'tel:+13104900246';
const ADDR = '3519 W 108th St, Inglewood, CA 90303';

const provider = {
  '@type': 'TowingService',
  name: BIZ,
  telephone: '+1-310-490-0246',
  url: SITE,
};

// ── Route definitions ──────────────────────────────────────────────

const pages = [
  // ─ Static pages ─
  {
    path: '/about',
    title: `About Us | ${BIZ} | Inglewood, CA`,
    desc: `Family-owned since 2006, ${BIZ} has served Inglewood and South LA for nearly two decades. Three generations of reliable, honest towing service.`,
    noscriptHeading: `About ${BIZ}`,
    noscriptBody: 'Family-owned since 2006. Three generations of reliable, honest towing in Inglewood, CA. Over 10,000 vehicles towed. Modern flatbed fleet. Certified operators.',
  },
  {
    path: '/contact',
    title: `Contact Us | ${BIZ} | Inglewood, CA`,
    desc: `Contact ${BIZ} in Inglewood, CA. Call ${PHONE} for 24/7 towing and roadside assistance. ${ADDR}.`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: { '@id': `${SITE}/#business` },
    },
    noscriptHeading: `Contact ${BIZ}`,
    noscriptBody: `Phone: ${PHONE}. Address: ${ADDR}. Hours: 24/7, 365 days a year. We answer every call.`,
  },
  {
    path: '/service-areas',
    title: `Service Areas | ${BIZ} | Inglewood & South LA`,
    desc: `${BIZ} serves Inglewood, Hawthorne, Lennox, Westchester, Gardena, Lawndale, El Segundo, Manhattan Beach, Torrance, Culver City, and all of South LA. 15-30 min response.`,
    noscriptHeading: `${BIZ} Service Areas`,
    noscriptBody: 'Serving Inglewood, Hawthorne, Lennox, Westchester, Ladera Heights, Gardena, Lawndale, El Segundo, Manhattan Beach, Torrance, Culver City, South LA, and the LAX area. Average response: 15-30 minutes.',
  },

  {
    path: '/services',
    title: `Our Services | ${BIZ} | 24/7 Towing & Roadside Assistance`,
    desc: `${BIZ} offers 24/7 emergency towing, flatbed, roadside, lockouts, jump starts, accident recovery, motorcycle towing, fuel delivery, tire change, battery installation, and winch-out in Inglewood, CA.`,
    noscriptHeading: `${BIZ} Services`,
    noscriptBody: '<ul><li><a href="/services/emergency-towing">Emergency Towing</a> — 24/7 fast dispatch</li><li><a href="/services/flatbed-towing">Flatbed Towing</a> — Safe vehicle transport</li><li><a href="/services/roadside-assistance">Roadside Assistance</a></li><li><a href="/services/lockout-service">Lockout Service</a></li><li><a href="/services/jump-start">Jump Start</a></li><li><a href="/services/accident-recovery">Accident Recovery</a></li><li><a href="/services/motorcycle-towing">Motorcycle Towing</a></li><li><a href="/services/fuel-delivery">Fuel Delivery</a></li><li><a href="/services/tire-change">Flat Tire Change</a></li><li><a href="/services/battery-installation">Battery Installation</a></li><li><a href="/services/winching">Winch-Out Service</a></li></ul>',
  },

  // ─ Service pages ─
  {
    path: '/services/emergency-towing',
    title: `Emergency Towing | 24/7 Tow Truck | ${BIZ} Inglewood`,
    desc: `Need an emergency tow in Inglewood? ${BIZ} provides 24/7 emergency towing with 15-30 min response times across the South Bay. Call ${PHONE}.`,
    ogImage: '/images/real-tow-23.jpeg',
    ogImageAlt: 'Emergency towing service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Emergency Towing', provider, areaServed: 'Inglewood, CA and surrounding areas', description: '24/7 emergency towing service with 15-30 minute average response time. Flatbed and wheel-lift trucks dispatched immediately.', image: `${SITE}/images/real-tow-23.jpeg` },
    noscriptHeading: 'Emergency Towing in Inglewood, CA',
    noscriptBody: '24/7 emergency towing with 15-30 minute response. We dispatch immediately after your call. Flatbed and wheel-lift trucks available.',
  },
  {
    path: '/services/flatbed-towing',
    title: `Flatbed Towing | Safe Vehicle Transport | ${BIZ} Inglewood`,
    desc: `Professional flatbed towing in Inglewood, CA. Safe transport for all vehicles including luxury, AWD, and low-clearance cars. Call ${PHONE}.`,
    ogImage: '/images/real-tow-5.jpeg',
    ogImageAlt: 'Flatbed towing service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Flatbed Towing', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Professional flatbed towing for safe, damage-free transport of all vehicle types including luxury, AWD, and low-clearance vehicles.', image: `${SITE}/images/real-tow-5.jpeg` },
    noscriptHeading: 'Flatbed Towing in Inglewood, CA',
    noscriptBody: 'Safe, damage-free flatbed transport for all vehicle types. Ideal for luxury cars, AWD vehicles, and low-clearance sports cars.',
  },
  {
    path: '/services/roadside-assistance',
    title: `Roadside Assistance | 24/7 Help | ${BIZ} Inglewood`,
    desc: `24/7 roadside assistance in Inglewood, CA. Flat tires, dead battery, locked out, fuel delivery. ${BIZ} responds in 15-30 min. Call ${PHONE}.`,
    ogImage: '/images/real-tow-21.jpeg',
    ogImageAlt: 'Roadside assistance by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Roadside Assistance', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Comprehensive 24/7 roadside assistance including flat tire changes, battery jump starts, fuel delivery, and lockout service.', image: `${SITE}/images/real-tow-21.jpeg` },
    noscriptHeading: 'Roadside Assistance in Inglewood, CA',
    noscriptBody: 'Flat tire, dead battery, out of gas, locked out? Our roadside assistance team responds 24/7 in 15-30 minutes.',
  },
  {
    path: '/services/lockout-service',
    title: `Lockout Service | Car Unlock | ${BIZ} Inglewood`,
    desc: `Locked out of your car in Inglewood? ${BIZ} provides fast, damage-free lockout service 24/7. Back in your car in minutes. Call ${PHONE}.`,
    ogImage: '/images/truck-sedan-apartments.jpg',
    ogImageAlt: 'Car lockout service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Lockout Service', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Fast, damage-free car lockout service available 24/7. Professional tools ensure no damage to your vehicle.', image: `${SITE}/images/truck-sedan-apartments.jpg` },
    noscriptHeading: 'Car Lockout Service in Inglewood, CA',
    noscriptBody: 'Locked out of your car? We provide fast, damage-free lockout service 24/7. Professional tools, no damage to your vehicle.',
  },
  {
    path: '/services/jump-start',
    title: `Jump Start Service | Dead Battery Help | ${BIZ} Inglewood`,
    desc: `Dead battery in Inglewood? ${BIZ} provides fast jump start service 24/7. Back on the road in minutes. Call ${PHONE}.`,
    ogImage: '/images/truck-chevy-tow.jpg',
    ogImageAlt: 'Jump start service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Jump Start Service', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Fast jump start service for dead batteries, available 24/7. Get back on the road in minutes.', image: `${SITE}/images/truck-chevy-tow.jpg` },
    noscriptHeading: 'Jump Start Service in Inglewood, CA',
    noscriptBody: 'Dead battery? Our jump start service gets you back on the road in minutes. Available 24/7 across Inglewood and the South Bay.',
  },
  {
    path: '/services/accident-recovery',
    title: `Accident Recovery | Vehicle Recovery | ${BIZ} Inglewood`,
    desc: `Professional accident recovery in Inglewood, CA. ${BIZ} handles vehicle recovery and accident scene assistance 24/7. Call ${PHONE}.`,
    ogImage: '/images/real-tow-10.jpeg',
    ogImageAlt: 'Accident recovery service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Accident Recovery', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Professional accident recovery and vehicle retrieval services. We work with insurance companies and law enforcement.', image: `${SITE}/images/real-tow-10.jpeg` },
    noscriptHeading: 'Accident Recovery in Inglewood, CA',
    noscriptBody: 'Professional accident scene vehicle recovery. We work with insurance and law enforcement. Safe vehicle retrieval 24/7.',
  },
  {
    path: '/services/motorcycle-towing',
    title: `Motorcycle Towing | Safe Bike Transport | ${BIZ} Inglewood`,
    desc: `Need motorcycle towing in Inglewood? ${BIZ} uses soft straps, wheel chocks, and flatbed loading for Harleys, sportbikes, and cruisers. Call ${PHONE}.`,
    ogImage: '/images/real-tow-19.jpeg',
    ogImageAlt: 'Motorcycle towing by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Motorcycle Towing', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Specialized motorcycle towing with soft straps, wheel chocks, and flatbed loading. Safe transport for Harleys, sportbikes, cruisers, scooters, and trikes.', image: `${SITE}/images/real-tow-19.jpeg` },
    noscriptHeading: 'Motorcycle Towing in Inglewood, CA',
    noscriptBody: 'Safe motorcycle towing with soft straps and flatbed loading. Harleys, sportbikes, cruisers, scooters, trikes - we tow them all without scratches.',
  },
  {
    path: '/services/fuel-delivery',
    title: `Emergency Fuel Delivery | Out of Gas? | ${BIZ} Inglewood`,
    desc: `Out of gas in Inglewood? ${BIZ} delivers gas or diesel 24/7. Fast response, upfront pricing, freeway shoulder service. Call ${PHONE}.`,
    ogImage: '/images/real-tow-21.jpeg',
    ogImageAlt: 'Fuel delivery service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Fuel Delivery', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Emergency fuel delivery (gas and diesel) anywhere in Inglewood and the South Bay. We bring enough fuel to get you to the nearest station.', image: `${SITE}/images/real-tow-21.jpeg` },
    noscriptHeading: 'Emergency Fuel Delivery in Inglewood, CA',
    noscriptBody: 'Ran out of gas? We deliver gas or diesel directly to your location 24/7. Enough fuel to get you to the nearest station. Freeway-safe.',
  },
  {
    path: '/services/tire-change',
    title: `Flat Tire Change | Roadside Tire Service | ${BIZ} Inglewood`,
    desc: `Flat tire in Inglewood? ${BIZ} provides 24/7 roadside tire change with hydraulic jack and impact gun. Freeway-safe. Call ${PHONE}.`,
    ogImage: '/images/real-tow-10.jpeg',
    ogImageAlt: 'Flat tire change service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Flat Tire Change', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Mobile flat tire change service with hydraulic jack, impact gun, and freeway-safe setup. Spare swap, plug repair, or tow to nearest tire shop.', image: `${SITE}/images/real-tow-10.jpeg` },
    noscriptHeading: 'Flat Tire Change in Inglewood, CA',
    noscriptBody: 'Mobile flat tire change with hydraulic jack and impact gun. Freeway-safe service. Spare swap or tow to a tire shop if needed.',
  },
  {
    path: '/services/battery-installation',
    title: `Mobile Battery Installation | New Car Battery | ${BIZ}`,
    desc: `Need a new car battery in Inglewood? ${BIZ} delivers and installs on-site. Free charging-system test, recycling included. Call ${PHONE}.`,
    ogImage: '/images/truck-chevy-tow.jpg',
    ogImageAlt: 'Mobile battery installation by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Battery Installation', provider, areaServed: 'Inglewood, CA and surrounding areas', description: 'Mobile car battery delivery and installation. Free charging-system test, manufacturer warranty, old battery recycling.', image: `${SITE}/images/truck-chevy-tow.jpg` },
    noscriptHeading: 'Mobile Battery Installation in Inglewood, CA',
    noscriptBody: 'Same-day mobile battery delivery and installation. Group 24, 35, 51R, 65, 75 batteries in stock. Free alternator test and old battery recycling.',
  },
  {
    path: '/services/winching',
    title: `Winch-Out Service | Stuck Vehicle Recovery | ${BIZ} Inglewood`,
    desc: `Stuck in mud, sand, or a ditch in Inglewood? ${BIZ} provides 12,000-lb winch recovery 24/7. Damage-free. Call ${PHONE}.`,
    ogImage: '/images/real-tow-17.jpeg',
    ogImageAlt: 'Winch-out service by Segura\'s Towing in Inglewood, CA',
    jsonLd: { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Winch-Out Service', provider, areaServed: 'Inglewood, CA and surrounding areas', description: '12,000-lb winch-out and stuck vehicle recovery. Mud, sand, ditches, soft shoulders, beach areas. Damage assessment before every pull.', image: `${SITE}/images/real-tow-17.jpeg` },
    noscriptHeading: 'Winch-Out & Stuck Vehicle Recovery in Inglewood, CA',
    noscriptBody: 'Stuck in mud, sand, ice, or a ditch? Our 12,000-lb winches and proper rigging recover your vehicle without damage.',
  },

  // ─ Blog ─
  {
    path: '/blog',
    title: `Blog | Towing Tips & Road Safety | ${BIZ}`,
    desc: `Towing tips, roadside safety guides, and expert advice from ${BIZ}. Learn what to do after an accident, how to choose a towing company, and more.`,
    noscriptHeading: `${BIZ} Blog`,
    noscriptBody: '<ul><li><a href="/blog/what-to-do-after-car-accident-inglewood">What to Do After a Car Accident in Inglewood</a></li><li><a href="/blog/how-to-choose-towing-company-los-angeles">How to Choose a Towing Company in Los Angeles</a></li><li><a href="/blog/roadside-emergency-kit-checklist">Roadside Emergency Kit Checklist</a></li><li><a href="/blog/flatbed-vs-wheel-lift-towing-which-is-better">Flatbed vs. Wheel-Lift Towing: Which Is Better?</a></li></ul>',
  },
  {
    path: '/blog/what-to-do-after-car-accident-inglewood',
    title: `What to Do After a Car Accident in Inglewood | ${BIZ}`,
    desc: 'Step-by-step guide on what to do after a car accident in Inglewood, CA. Safety tips, insurance steps, and when to call a tow truck.',
    jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'What to Do After a Car Accident in Inglewood', datePublished: '2025-01-15', author: { '@type': 'Organization', name: BIZ }, publisher: { '@type': 'Organization', name: BIZ, url: SITE } },
    noscriptHeading: 'What to Do After a Car Accident in Inglewood',
    noscriptBody: 'A step-by-step guide to staying safe and handling the aftermath of a car accident in Inglewood, CA.',
  },
  {
    path: '/blog/how-to-choose-towing-company-los-angeles',
    title: `How to Choose a Towing Company in Los Angeles | ${BIZ}`,
    desc: 'Tips for choosing a reliable towing company in Los Angeles. What to look for, red flags to avoid, and why local matters.',
    jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'How to Choose a Towing Company in Los Angeles', datePublished: '2025-02-01', author: { '@type': 'Organization', name: BIZ }, publisher: { '@type': 'Organization', name: BIZ, url: SITE } },
    noscriptHeading: 'How to Choose a Towing Company in Los Angeles',
    noscriptBody: 'Expert tips for finding a trustworthy, reliable towing company in the Los Angeles area.',
  },
  {
    path: '/blog/roadside-emergency-kit-checklist',
    title: `Roadside Emergency Kit Checklist | ${BIZ}`,
    desc: 'Essential items for your roadside emergency kit. Be prepared for breakdowns, flat tires, and other road emergencies.',
    jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Roadside Emergency Kit Checklist', datePublished: '2025-02-15', author: { '@type': 'Organization', name: BIZ }, publisher: { '@type': 'Organization', name: BIZ, url: SITE } },
    noscriptHeading: 'Roadside Emergency Kit Checklist',
    noscriptBody: 'Essential items every driver should keep in their car for roadside emergencies.',
  },
  {
    path: '/blog/flatbed-vs-wheel-lift-towing-which-is-better',
    title: `Flatbed vs. Wheel-Lift Towing: Which Is Better? | ${BIZ}`,
    desc: 'Compare flatbed and wheel-lift towing methods. Learn which is safer for your vehicle and when each is the right choice.',
    jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Flatbed vs. Wheel-Lift Towing: Which Is Better?', datePublished: '2025-03-01', author: { '@type': 'Organization', name: BIZ }, publisher: { '@type': 'Organization', name: BIZ, url: SITE } },
    noscriptHeading: 'Flatbed vs. Wheel-Lift Towing: Which Is Better?',
    noscriptBody: 'A comparison of the two most common towing methods and when each is the right choice for your vehicle.',
  },

  // ─ Service area pages (one per city) ─
  ...serviceAreas.map((area) => ({
    path: `/service-areas/${area.slug}`,
    title: `Towing in ${area.name}, CA | ${area.responseTime} ETA | ${BIZ}`,
    desc: `Need a tow truck in ${area.name}? ${BIZ} responds in ${area.responseTime} with 24/7 emergency dispatch, flatbed towing, and roadside assistance. Call ${PHONE}.`,
    ogImage: '/images/truck-branded-side.jpg',
    ogImageAlt: `Segura's Towing serving ${area.name}, CA`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE}/service-areas/${area.slug}#business`,
      name: `${BIZ} - ${area.name}`,
      description: `24/7 towing and roadside assistance in ${area.name}, CA. ${area.responseTime} average response time. ${area.tagline}`,
      telephone: '+1-310-490-0246',
      url: `${SITE}/service-areas/${area.slug}`,
      image: `${SITE}/images/truck-branded-side.jpg`,
      logo: `${SITE}/favicon.svg`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3519 W 108th St',
        addressLocality: 'Inglewood',
        addressRegion: 'CA',
        postalCode: '90303',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: area.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: area.name,
          addressRegion: 'CA',
          postalCode: area.zip.split(',')[0].trim(),
          addressCountry: 'US',
        },
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Towing Services in ${area.name}`,
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Emergency Towing in ${area.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Flatbed Towing in ${area.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Roadside Assistance in ${area.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Lockout Service in ${area.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Jump Start in ${area.name}` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Accident Recovery in ${area.name}` } },
        ],
      },
    },
    noscriptHeading: `Towing in ${area.name}, CA - ${BIZ}`,
    noscriptBody: `${area.intro} Average response time: ${area.responseTime}. Call ${PHONE} for 24/7 dispatch. We serve ${area.neighborhoods.slice(0, 5).join(', ')} and all of ${area.name}.`,
  })),
];

// ── Helpers ─────────────────────────────────────────────────────────

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function breadcrumb(path) {
  const parts = path.split('/').filter(Boolean);
  if (!parts.length) return null;
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }];
  let cur = '';
  parts.forEach((p, i) => {
    cur += '/' + p;
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: p.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
      item: SITE + cur,
    });
  });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

function noscriptBlock(heading, body) {
  return `
    <noscript>
      <div style="max-width:800px;margin:40px auto;padding:20px;font-family:system-ui,sans-serif">
        <h1>${heading}</h1>
        <p>${body}</p>
        <p><strong>Call now: <a href="${TEL}">${PHONE}</a></strong></p>
        <p>Address: ${ADDR} — Open 24/7</p>
        <nav style="margin-top:20px">
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> |
          <a href="/service-areas">Areas</a> | <a href="/blog">Blog</a>
        </nav>
      </div>
    </noscript>`;
}

// ── Generate ────────────────────────────────────────────────────────

console.log('Generating SEO pages...');

for (const page of pages) {
  let html = template;

  // Meta tags
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(page.desc)}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${SITE}${page.path}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(page.title)}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(page.desc)}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${SITE}${page.path}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${esc(page.title)}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${esc(page.desc)}"`);

  // OG image — use page-specific image or keep default
  if (page.ogImage) {
    html = html.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${SITE}${page.ogImage}"`);
    html = html.replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${SITE}${page.ogImage}"`);
    if (page.ogImageAlt) {
      html = html.replace(/<meta property="og:image:alt" content="[^"]*"/, `<meta property="og:image:alt" content="${esc(page.ogImageAlt)}"`);
      html = html.replace(/<meta name="twitter:image:alt" content="[^"]*"/, `<meta name="twitter:image:alt" content="${esc(page.ogImageAlt)}"`);
    }
  }

  // Page-specific JSON-LD
  if (page.jsonLd) {
    html = html.replace('</head>', `    <script type="application/ld+json">\n    ${JSON.stringify(page.jsonLd)}\n    </script>\n  </head>`);
  }

  // Breadcrumb JSON-LD
  const bc = breadcrumb(page.path);
  if (bc) {
    html = html.replace('</head>', `    <script type="application/ld+json">\n    ${JSON.stringify(bc)}\n    </script>\n  </head>`);
  }

  // Replace noscript content
  if (page.noscriptHeading) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptBlock(page.noscriptHeading, page.noscriptBody));
  }

  // Write file
  const dir = resolve(distDir, page.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html);
  console.log(`  \u2713 ${page.path}`);
}

console.log(`\nDone — ${pages.length} route-specific HTML files generated.`);

// ── Sitemap.xml — auto-generated with fresh lastmod every build ─────
//
// Includes the home page + every route in `pages`. Priority and changefreq
// are tuned for a local services site (home > services/areas > blog).
const today = new Date().toISOString().split('T')[0];

function priorityFor(path) {
  if (path === '/') return '1.0';
  if (path === '/services' || path === '/service-areas' || path === '/contact') return '0.9';
  if (path.startsWith('/services/')) return '0.85';
  if (path.startsWith('/service-areas/')) return '0.85';
  if (path === '/about') return '0.7';
  if (path === '/blog') return '0.7';
  if (path.startsWith('/blog/')) return '0.6';
  return '0.5';
}

function changefreqFor(path) {
  if (path === '/') return 'weekly';
  if (path.startsWith('/blog')) return 'monthly';
  return 'monthly';
}

const sitemapEntries = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  ...pages.map((p) => ({
    path: p.path,
    priority: priorityFor(p.path),
    changefreq: changefreqFor(p.path),
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (e) => `  <url>
    <loc>${SITE}${e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemapXml);
console.log(`\u2713 sitemap.xml generated with ${sitemapEntries.length} URLs (lastmod: ${today})`);

// ── 404.html — static fallback for unknown routes ──────────────────
//
// Netlify will serve this for any path not matched by a real file or
// `/_redirects` rule. We rewrite the index.html template the same way as
// the route pages above so the 404 has proper title/desc/canonical.
{
  const notFoundTitle = `Page Not Found (404) | ${BIZ}`;
  const notFoundDesc = `The page you're looking for doesn't exist. Need a tow right now? Call ${BIZ} at ${PHONE} — 24/7 dispatch in Inglewood and the South Bay.`;
  const notFoundCanonical = `${SITE}/404`;

  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(notFoundTitle)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(notFoundDesc)}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${notFoundCanonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(notFoundTitle)}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(notFoundDesc)}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${notFoundCanonical}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${esc(notFoundTitle)}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${esc(notFoundDesc)}"`);

  // robots: noindex so we don't accidentally rank a 404
  html = html.replace('</head>', `    <meta name="robots" content="noindex, follow" />\n  </head>`);

  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptBlock(
    'Page Not Found',
    `Sorry, that page doesn't exist. Try our <a href="/services">services</a>, <a href="/service-areas">service areas</a>, or <a href="/contact">contact us</a>.`
  ));

  writeFileSync(resolve(distDir, '404.html'), html);
  console.log('\u2713 404.html generated');
}
