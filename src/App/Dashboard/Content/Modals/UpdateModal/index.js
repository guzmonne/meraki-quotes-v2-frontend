import './styles.css';
import React from 'react';
import T from 'prop-types';
import Modal from '../../../../../common/Modal/';

const MerakiDeviceUpdateModal = ({
  closeModal,
  title,
  children,
}) => (
  <Modal title={title}
    type="warning"
    closeModal={closeModal}>
    <div className="UpdateModal">
      {children}
    </div>
  </Modal>
);

MerakiDeviceUpdateModal.propTypes = {
  children: T.node,
  closeModal: T.func.isRequired,
  title: T.string,
};

export default MerakiDeviceUpdateModal;
