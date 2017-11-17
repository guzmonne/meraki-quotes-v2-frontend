import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../../common/Modal/'
import ControlInput from '../../../../../../common/ControlInput/'
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

const createKey = (UserID, createdAt) => {
  const key = btoa(JSON.stringify({ UserID, createdAt }));
  return key.slice(key.length - 10, key.length - 2);
};

const MerakiNameAndDescriptionModal = ({
  UserID,
  createdAt,
  Name,
  Description,
  onUpdate,
  closeModal,
}) => (
    <Modal title={`Editar cotización #${createKey(UserID, createdAt)}`}
      type="warning"
      closeModal={closeModal}>
      <div className="UpdateModal">
        <form onSubmit={closeModal}>
          <ControlInput
            value={Name}
            label="Nombre"
            type="text"
            onChange={e => onUpdate({
              Name: e.target.value,
            })}
          />
          <ControlInput
            value={Description}
            label="Descripción"
            type="text"
            onChange={e => onUpdate({
              Description: e.target.value,
            })}
          />
        </form>
      </div>
    </Modal>
  );

MerakiNameAndDescriptionModal.propTypes = Object.assign({}, IMerakiQuotes, {
  onUpdate: T.func.isRequired,
  closeModal: T.func.isRequired,
});

export default MerakiNameAndDescriptionModal;
