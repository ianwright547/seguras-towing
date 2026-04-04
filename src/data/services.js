import { Truck, RectangleHorizontal, Wrench, MapPin, AlertTriangle, Bike } from 'lucide-react';

export const services = [
  {
    title: 'Emergency Towing',
    description: 'Fast response for breakdowns, accidents, and disabled vehicles. We arrive in 30 minutes or less, 24 hours a day, 7 days a week.',
    icon: Truck,
    image: '/images/truck-night-tow.jpg',
  },
  {
    title: 'Flatbed Towing',
    description: 'Safe transport for luxury, classic, and all-wheel-drive vehicles on our modern flatbed trucks. Your vehicle stays damage-free.',
    icon: RectangleHorizontal,
    image: '/images/truck-mustang-downtown.jpg',
  },
  {
    title: 'Roadside Assistance',
    description: 'Jump starts, tire changes, fuel delivery, and lockout service to get you back on the road fast without a tow.',
    icon: Wrench,
    image: '/images/truck-branded-side.jpg',
  },
  {
    title: 'Long Distance Towing',
    description: 'Reliable vehicle transport across Southern California and beyond. Competitive rates for long-haul moves.',
    icon: MapPin,
    image: '/images/truck-crossover-tow.jpg',
  },
  {
    title: 'Accident Recovery',
    description: 'Professional accident scene vehicle recovery handled with care and efficiency. We work directly with insurance companies.',
    icon: AlertTriangle,
    image: '/images/truck-sedan-apartments.jpg',
  },
  {
    title: 'Motorcycle & Heavy Duty',
    description: 'Specialized equipment for safe motorcycle pickup and heavy-duty truck towing. All vehicle types welcome.',
    icon: Bike,
    image: '/images/truck-chevy-tow.jpg',
  },
];
