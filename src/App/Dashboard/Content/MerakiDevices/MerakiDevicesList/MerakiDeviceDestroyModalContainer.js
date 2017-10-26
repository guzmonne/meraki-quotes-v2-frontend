import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDeviceDestroyModal from '../../Modals/DestroyModal/';
import {
  UPDATE_UI,
  API_DESTROY,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => ({
  id: (
    get(state, 'ui.merakiDevices.merakiDeviceSelectedToDestroy')
  ),
  title: 'Eliminar equipo',
  message: '¿Esta seguro que desea eliminar este equipo?',
});

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    merakiDevices: {
      displayingDestroyModal: false,
      merakiDeviceSelectedToDestroy: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
  onDestroy: (id) => ({
    type: DISPATCH_MULTIPLE_ACTIONS,
    payload: [{
      type: API_DESTROY,
      payload: {
        endpoint: `/merakiDevices`,
        target: 'merakiDevices',
        id: id,
      },
    }, closeModal()]
  })
};

const MerakiDeviceDestroyModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDeviceDestroyModal)
);

MerakiDeviceDestroyModalContainer.displayName = 'MerakiDeviceDestroyModalContainer';

export default MerakiDeviceDestroyModalContainer;
