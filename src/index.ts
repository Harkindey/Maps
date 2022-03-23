import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const customeMap = new CustomMap('map');

customeMap.addUserMarker(user);
