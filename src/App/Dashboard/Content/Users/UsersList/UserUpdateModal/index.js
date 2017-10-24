import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserForm from '../../UserForm/';
import Modal from '../../../../../../common/Modal/';
import {IUser} from '../../IUsers';

const UserUpdateModal = ({user, closeModal, updateUser}) => (
  <Modal title={`Editando: ${user.username}`}
    type="warning"
    closeModal={closeModal}>
    <div className="UserShowModal">
      <UserForm user={user}
        color="orange"
        fieldsDisabled={{
          email: true,
          password: true,
        }}
        onSubmit={({username, email}) => {
          updateUser(btoa(JSON.stringify({email})), {username})
        }}/>
    </div>
  </Modal>
);

UserUpdateModal.propTypes = {
  user: T.shape(IUser),
  closeModal: T.func.isRequired,
  updateUser: T.func,
};

export default UserUpdateModal;
