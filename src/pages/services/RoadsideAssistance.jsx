import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function RoadsideAssistance() {
  const data = getServiceBySlug('roadside-assistance');
  return <ServicePage service={data} />;
}
