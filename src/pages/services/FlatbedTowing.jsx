import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function FlatbedTowing() {
  const data = getServiceBySlug('flatbed-towing');
  return <ServicePage service={data} />;
}
