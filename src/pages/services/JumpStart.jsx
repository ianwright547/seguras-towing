import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function JumpStart() {
  const data = getServiceBySlug('jump-start');
  return <ServicePage service={data} />;
}
