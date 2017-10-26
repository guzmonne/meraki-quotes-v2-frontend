import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDeviceDestroyModal from './MerakiDeviceDestroyModal/';
import {
  UPDATE_UI,
  API_DESTROY,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => ({
  id: (
    get(state, 'ui.merakiDevices.merakiDeviceSelectedToDestroy')
  ),
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
  resetForm: (form) => ({
    type: UPDATE_UI,
    payload: {
      permissions: {
        form,
      }
    }
  }),
  destroyMerakiDevice: (id) => ({
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