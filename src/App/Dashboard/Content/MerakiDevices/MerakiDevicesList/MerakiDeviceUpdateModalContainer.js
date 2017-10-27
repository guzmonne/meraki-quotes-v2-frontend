import React from 'react';
import T from 'prop-types';
import 
  createUpdateModalContainer 
from '../../Modals/createUpdateModalContainer.js';
import MerakiDeviceForm from '../MerakiDeviceForm/';
import {IMerakiDevice} from '../IMerakiDevices';

const MerakiDeviceUpdateModal = ({
  merakiDevice,
  onUpdate,
}) => (
  <MerakiDeviceForm merakiDevice={merakiDevice}
    color="orange"
    fieldsDisabled={{
      Category: true,
      PartNumber: true,
    }}
    onSubmit={(merakiDevice) => {
      onUpdate(btoa(JSON.stringify({
        Category: merakiDevice.Category, 
        PartNumber: merakiDevice.PartNumber,
      })), Object.keys({
        Description: merakiDevice.Description,
        ImageUrl: merakiDevice.ImageUrl,
        Price: merakiDevice.Price,
      }).reduce((acc, key) => (
        merakiDevice[key] === '' ? acc : {...acc, [key]: merakiDevice[key]}
      ), {}))
    }}
  />
);

MerakiDeviceUpdateModal.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  onUpdate: T.func.isRequired,
};

export default createUpdateModalContainer({
  uiKeyName: 'merakiDevicesSelectedToUpdateKey',
  modelName: 'merakiDevice',
  modalFlagName: 'displayingUpdateModal',
  updateUiPayload: {
    merakiDeviceSelectedToUpdateKey: undefined,
  },
  target: 'merakiDevices',
  title: (merakiDevice) => (
    `Editando: ${merakiDevice.PartNumber} [${merakiDevice.Category}]`
  ),
  displayName:'MerakiDeviceUpdateModal',
})(MerakiDeviceUpdateModal);
