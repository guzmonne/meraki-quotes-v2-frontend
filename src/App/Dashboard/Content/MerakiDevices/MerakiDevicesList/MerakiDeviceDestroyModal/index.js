import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../../common/Modal/';
import Button from '../../../../../../common/Button/';

const MerakiDeviceDestroyModal = ({id, destroyMerakiDevice, closeModal}) => (
  <Modal title="Eliminar Equipo" type="danger" closeModal={closeModal}>
    <div className="MerakiDeviceDestroyModal">
      <h3>¿Esta seguro que desea eliminar este equipo?</h3>
      <div className="button-bar">
        <Button type="button" color="red" 
          onClick={() => destroyMerakiDevice(id)}>
          Si, deseo eliminarlo
        </Button>
        <Button type="button" color="grey" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </div>
  </Modal>
);

MerakiDeviceDestroyModal.propTypes = {
  destroyMerakiDevice: T.func.isRequired,
  closeModal: T.func.isRequired,
  key: T.string,
};

export default MerakiDeviceDestroyModal;
