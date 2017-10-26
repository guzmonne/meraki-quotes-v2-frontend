import 
  createDestroyModalContainer 
from '../../Modals/createDestroyModalContainer.js';

export default createDestroyModalContainer({
  uiIdPath: 'users.userSelectedToDestroy',
  modalTitle: 'Eliminar usuario',
  okMessage: '¿Esta seguro que desea eliminar al usuario?',
  modalFlagName: 'displayingDestroyModal',
  updateUiPayload: {
    userSelectedToDestroy: undefined,
  },
  endpoint: '/users',
  target: 'users',
  displayName: 'UserDestroyModal'
});
