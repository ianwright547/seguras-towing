import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function MotorcycleTowing() {
  const data = getServiceBySlug('motorcycle-towing');
  return <ServicePage service={data} />;
}
