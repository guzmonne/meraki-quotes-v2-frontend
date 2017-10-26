import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../common/Modal';
import Button from '../../../../../common/Button';

const DestroyModal = ({
  id,
  closeModal,
  title,
  message,
  onDestroy,
}) => (
  <Modal title={title} type="danger" closeModal={closeModal}>
    <div className="DestroyModal">
      <h3>{message}</h3>
      <div className="button-bar">
        <Button type="button" color="red" 
          onClick={() => onDestroy(id)}>
          Si, deseo eliminarlo
        </Button>
        <Button type="button" color="grey" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </div>
  </Modal>
);

DestroyModal.propTypes = {
  id: T.string,
  closeModal: T.func.isRequired,
  title: T.string,
  message: T.string,
  onDestroy: T.func,
};

export default DestroyModal;
