import './styles.css';
import React from 'react';
import T from 'prop-types';
import MerakiDeviceForm from '../../MerakiDeviceForm/';
import Modal from '../../../../../../common/Modal/';
import {IMerakiDevice} from '../../IMerakiDevices';

const MerakiDeviceUpdateModal = ({
  merakiDevice,
  closeModal,
  updateMerakiDevice
}) => (
  <Modal title={
    `Editando: ${merakiDevice.PartNumber} [${merakiDevice.Category}]`
  }
    type="warning"
    closeModal={closeModal}>
    <div className="MerakiDeviceShowModal">
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
        }}/>
    </div>
  </Modal>
);

MerakiDeviceUpdateModal.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  closeModal: T.func.isRequired,
  updateMerakiDevice: T.func,
};

export default MerakiDeviceUpdateModal;
