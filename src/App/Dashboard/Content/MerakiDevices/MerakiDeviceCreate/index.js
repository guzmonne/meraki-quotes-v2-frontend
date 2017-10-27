import './styles.css';
import MerakiDeviceForm from '../MerakiDeviceForm/';
import {IMerakiDevice, empty} from '../IMerakiDevices.js';
import createCreateComponent from '../../HoC/createCreateComponent.js';

const MerakiDeviceCreate = createCreateComponent({
  empty,
  displayName: 'MerakiDeviceCreate',
  title: 'Crear Nuevo Usuario',
  itemType: IMerakiDevice,
})(MerakiDeviceForm);

export default MerakiDeviceCreate;
