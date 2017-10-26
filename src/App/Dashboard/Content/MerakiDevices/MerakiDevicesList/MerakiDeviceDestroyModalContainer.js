import 
  createDestroyModalContainer 
from '../../Modals/createDestroyModalContainer.js';

export default createDestroyModalContainer({
  uiIdPath: 'merakiDevices.merakiDeviceSelectedToDestroy',
  modalTitle: 'Eliminar equipo',
  okMessage: '¿Esta seguro que desea eliminar este equipo?',
  modalFlagName: 'displayingDestroyModal',
  updateUiPayload: {
    merakiDeviceSelectedToDestroy: undefined,
  },
  endpoint: '/merakiDevices',
  target: 'merakiDevices',
  displayName: 'MerakiDevicesDestroyModal'
});
