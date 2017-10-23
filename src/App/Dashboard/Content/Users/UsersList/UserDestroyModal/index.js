import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../../common/Modal/';
import Button from '../../../../../../common/Button/';

const UserDestroyModal = ({key, destroyUser, closeModal}) => (
  <Modal title="Eliminar Usuario" type="danger" closeModal={closeModal}>
    <div className="UserDestroyModal">
      <h3>¿Esta seguro que desea eliminar al usuario?</h3>
      <div className="button-bar">
        <Button type="button" color="red" onClick={() => destroyUser(key)}>
          Si, deseo eliminarlo
        </Button>
        <Button type="button" color="grey" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </div>
  </Modal>
);

UserDestroyModal.propTypes = {
  deleteUser: T.func.isRequired,
  closeModal: T.func.isRequired,
};

export default UserDestroyModal;
