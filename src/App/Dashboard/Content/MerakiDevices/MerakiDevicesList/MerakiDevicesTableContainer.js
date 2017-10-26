import MerakiDevicesTable from './MerakiDevicesTable/';
import createTableContainer from '../../HoC/createTableContainer.js';

const MerakiDevicesTableContainer = createTableContainer({
  target: 'merakiDevices',
  encodeKey: ({Category, PartNumber}) => (
    btoa(JSON.stringify({Category, PartNumber}))
  ),
  displayName:'MerakiDevicesTable',
})(MerakiDevicesTable)

export default MerakiDevicesTableContainer;
