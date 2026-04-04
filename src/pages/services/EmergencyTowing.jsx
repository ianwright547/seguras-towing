import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function EmergencyTowing() {
  const data = getServiceBySlug('emergency-towing');
  return <ServicePage service={data} />;
}
