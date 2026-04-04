import SEOHead from '../components/ui/SEOHead';
import Hero from '../components/sections/Hero';
import TrustBadges from '../components/sections/TrustBadges';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Reviews from '../components/sections/Reviews';
import ServiceArea from '../components/sections/ServiceArea';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <SEOHead
        title="24/7 Towing Service in Inglewood, CA"
        description="Fast, reliable towing and roadside assistance in Inglewood. 24/7 emergency dispatch, upfront pricing, and a trusted local team. Call (310) 490-0246 now."
        canonical="/"
      />
      <Hero />
      <TrustBadges />
      <Services />
      <Process />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
    </>
  );
}
