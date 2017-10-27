import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import {UPDATE_UI} from '../../../../../store/actions.js';
import Modal from '../../Modals/ShowModal/';
import DateFromNow from '../../../../../common/DateFromNow/';
import Money from '../../../../../common/Money/';
import {IMerakiDevice} from '../IMerakiDevices.js';

const MerakiDeviceShowModal = ({merakiDevice, closeModal}) => (
  <Modal title={`${merakiDevice.PartNumber}`} 
    type="info"
    closeModal={closeModal}
  >
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
  </Modal>
);

MerakiDeviceShowModal.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  closeModal: T.func.isRequired,
};

const mapStateToProps = (state) => {
  const key = get(state, 'ui.merakiDevices.merakiDevicesSelectedToShowKey')

  return {
    merakiDevice: get(state, `entities.merakiDevices.${key}`, {}),
  }
};

const mapActionsToProps = {
  closeModal: () => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingShowModal: false,
        merakiDeviceSelectedToShow: undefined,
      }
    }
  }),
};

const MerakiDeviceShowModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDeviceShowModal)
);

MerakiDeviceShowModalContainer.displayName = 'MerakiDeviceShowModalContainer';

export default MerakiDeviceShowModalContainer;
