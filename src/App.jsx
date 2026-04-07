import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToHash from './components/ui/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import EmergencyTowing from './pages/services/EmergencyTowing';
import FlatbedTowing from './pages/services/FlatbedTowing';
import RoadsideAssistance from './pages/services/RoadsideAssistance';
import LockoutService from './pages/services/LockoutService';
import JumpStart from './pages/services/JumpStart';
import AccidentRecovery from './pages/services/AccidentRecovery';
import ServicesPage from './pages/ServicesPage';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.04]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="global-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#global-noise)" />
        </svg>
      </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/emergency-towing" element={<EmergencyTowing />} />
          <Route path="/services/flatbed-towing" element={<FlatbedTowing />} />
          <Route path="/services/roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="/services/lockout-service" element={<LockoutService />} />
          <Route path="/services/jump-start" element={<JumpStart />} />
          <Route path="/services/accident-recovery" element={<AccidentRecovery />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}
