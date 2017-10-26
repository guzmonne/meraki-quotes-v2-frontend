import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import UpdateModal from '../../Modals/UpdateModal/';
import {
  UPDATE_UI,
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
} from '../../../../../store/actions.js';
import MerakiDeviceForm from '../MerakiDeviceForm/';
import {IMerakiDevice} from '../IMerakiDevices';

const MerakiDeviceUpdateModal = ({
  merakiDevice,
  closeModal,
  updateMerakiDevice
}) => (
  <UpdateModal 
    closeModal={closeModal}
    title={
      `Editando: ${merakiDevice.PartNumber} [${merakiDevice.Category}]`
    }>
    <MerakiDeviceForm merakiDevice={merakiDevice}
      color="orange"
      fieldsDisabled={{
        Category: true,
        PartNumber: true,
      }}
      onSubmit={(merakiDevice) => {
        updateMerakiDevice(btoa(JSON.stringify({
          Category: merakiDevice.Category, 
          PartNumber: merakiDevice.PartNumber,
        })), Object.keys(merakiDevice).reduce((acc, key) => (
          merakiDevice[key] === '' ? acc : {...acc, [key]: merakiDevice[key]}
        ), {}))
      }}
    />
  </UpdateModal>
);

MerakiDeviceUpdateModal.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  closeModal: T.func.isRequired,
  updateMerakiDevice: T.func,
};

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
