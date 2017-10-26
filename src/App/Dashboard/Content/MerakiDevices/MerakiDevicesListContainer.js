import MerakiDevicesList from './MerakiDevicesList/';
import {merakiDevices} from '../../../../store/schemas.js';
import createListContainer from '../Pages/createListContainer.js';

const MerakiDevicesListContainer = createListContainer({
  target: 'merakiDevices',
  fetchingFlag: 'merakidevicesApiIndex',
  schema: merakiDevices,
  displayName:'MerakiDevicesListContainer'
})(MerakiDevicesList);

export default MerakiDevicesListContainer;
