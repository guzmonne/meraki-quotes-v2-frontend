import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../../common/Modal/';
import DateFromNow from '../../../../../../common/DateFromNow/';
import Money from '../../../../../../common/Money/';
import {IMerakiDevice} from '../../IMerakiDevices.js';

const MerakiDeviceShowModal = ({merakiDevice, closeModal}) => (
  <Modal title={`${merakiDevice.PartNumber}`} 
    type="info"
    closeModal={closeModal}
  >
    <div className="MerakiDeviceShowModal">
    {merakiDevice.ImageUrl &&
      <img src={merakiDevice.ImageUrl} alt={merakiDevice.PartNumber} />
    }
      <div>
        <dt>Número de Parte</dt>
        <dd>{merakiDevice.PartNumber}</dd>
        <dt>Categoría</dt>
        <dd>{merakiDevice.Category}</dd>
        <dt>Descripción</dt>
        <dd>{merakiDevice.Description}</dd>
        <dt>Creado</dt>
        <dd><DateFromNow>{merakiDevice.createdAt}</DateFromNow></dd>
        <dt>Precio</dt>
        <dd><Money>{merakiDevice.Price}</Money></dd>
      </div>
    </div>
  </Modal>
);

MerakiDeviceShowModal.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  closeModal: T.func.isRequired,
};

export default MerakiDeviceShowModal;
