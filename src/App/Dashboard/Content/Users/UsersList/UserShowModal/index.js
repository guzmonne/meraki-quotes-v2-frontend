import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserProfile from '../../../UserProfile/';
import Modal from '../../../../../../common/Modal/';
import {IUser} from '../../IUsers';

const UserShowModal = ({user, closeModal}) => (
  <Modal title={`${user.username}`} 
    type="info"
    closeModal={closeModal}
  >
    <div className="UserShowModal">
      <UserProfile user={user} />
    </div>
  </Modal>
);

UserShowModal.propTypes = {
  user: T.shape(IUser),
  closeModal: T.func.isRequired,
};

export default UserShowModal;
