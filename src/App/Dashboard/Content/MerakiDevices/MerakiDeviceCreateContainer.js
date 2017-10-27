import MerakiDeviceCreate from './MerakiDeviceCreate/';
import {merakiDevices} from '../../../../store/schemas.js';
import createCreateContainer from '../HoC/createCreateContainer.js';

const MerakiDeviceCreateContainer = createCreateContainer({
  target: 'merakiDevices',
  schema: merakiDevices,
  displayName: 'MerakiDeviceCreateContainer',
})(MerakiDeviceCreate);

export default MerakiDeviceCreateContainer;
