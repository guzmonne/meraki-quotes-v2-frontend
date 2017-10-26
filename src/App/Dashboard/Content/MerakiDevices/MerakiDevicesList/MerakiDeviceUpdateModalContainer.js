import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDeviceUpdateModal from './MerakiDeviceUpdateModal/';
import {
  UPDATE_UI,
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => {
  const key = get(state, 'ui.merakiDevices.merakiDeviceSelectedToUpdateKey');
  return {
    merakiDevice: get(state, `entities.merakiDevices.${key}`)
  }
};

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    merakiDevices: {
      displayingUpdateModal: false,
      merakiDeviceSelectedToUpdateKey: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
  updateMerakiDevice: (key, {Description, ImageUrl, Price}) => ({
    type: DISPATCH_MULTIPLE_ACTIONS,
    payload: [
      closeModal(), {
      type: API_UPDATE,
      payload: {
        endpoint: `/merakiDevices/${key}`,
        body: {Description, ImageUrl, Price},
        key,
        target: 'merakiDevices'
      }
    }]
  })
};

const MerakiDeviceUpdateModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDeviceUpdateModal)
);

MerakiDeviceUpdateModalContainer.displayName = 'MerakiDeviceUpdateModalContainer';

export default MerakiDeviceUpdateModalContainer;
