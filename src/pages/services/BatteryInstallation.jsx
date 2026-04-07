import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function BatteryInstallation() {
  const data = getServiceBySlug('battery-installation');
  return <ServicePage service={data} />;
}
