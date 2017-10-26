import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../common/Modal';

const MerakiDeviceShowModal = ({
  closeModal,
  title,
  children,
}) => (
  <Modal title={title} 
    type="info"
    closeModal={closeModal}
  >
    <div className="ShowModal">
      {children}
    </div>
  </Modal>
);

MerakiDeviceShowModal.propTypes = {
  closeModal: T.func,
  title: T.string,
  children: T.node,
};

export default MerakiDeviceShowModal;
