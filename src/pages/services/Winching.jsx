import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function Winching() {
  const data = getServiceBySlug('winching');
  return <ServicePage service={data} />;
}
