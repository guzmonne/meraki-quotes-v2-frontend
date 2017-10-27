import {IMerakiDevice} from '../../IMerakiDevices.js';
import MerakiDeviceRow from './MerakiDeviceRow/';
import createTableComponent from '../../../HoC/createTableComponent.js';

const MerakiDevicesTable = createTableComponent({
  headers: [
    'Número de Parte',
    'Categoría',        
    'Descripción',
    'Creado',
    'Precio',
    '',
  ],
  rowId: (item) => `${item.Category}${item.PartNumber}`,
  schema: IMerakiDevice,
  displayName: 'MerakiDevicesTable',
})(MerakiDeviceRow);

export default MerakiDevicesTable;
