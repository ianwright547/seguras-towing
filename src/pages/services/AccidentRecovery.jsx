import ServicePage from './ServicePage';
import { getServiceBySlug } from '../../data/servicesData';

export default function AccidentRecovery() {
  const data = getServiceBySlug('accident-recovery');
  return <ServicePage service={data} />;
}
