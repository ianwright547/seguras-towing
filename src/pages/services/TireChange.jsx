import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function TireChange() {
  const data = getServiceBySlug('tire-change');
  return <ServicePage service={data} />;
}
