import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function LockoutService() {
  const data = getServiceBySlug('lockout-service');
  return <ServicePage service={data} />;
}
