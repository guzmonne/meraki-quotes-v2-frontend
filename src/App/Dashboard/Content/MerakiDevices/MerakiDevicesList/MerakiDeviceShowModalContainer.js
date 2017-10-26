import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDeviceShowModal from './MerakiDeviceShowModal/';
import {
  UPDATE_UI,
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => {
  const key = get(state, 'ui.merakiDevices.merakiDeviceSelectedToShowKey')

  return {
    merakiDevice: get(state, `entities.merakiDevices.${key}`, {}),
  }
};

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    merakiDevices: {
      displayingShowModal: false,
      merakiDeviceSelectedToShow: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
};

const MerakiDeviceShowModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDeviceShowModal)
);

MerakiDeviceShowModalContainer.displayName = 'MerakiDeviceShowModalContainer';

export default MerakiDeviceShowModalContainer;
