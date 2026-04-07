import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function FuelDelivery() {
  const data = getServiceBySlug('fuel-delivery');
  return <ServicePage service={data} />;
}
