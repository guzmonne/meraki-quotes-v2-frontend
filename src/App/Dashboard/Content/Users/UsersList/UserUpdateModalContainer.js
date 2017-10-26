import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import UpdateModal from '../../Modals/UpdateModal/';
import {
  UPDATE_UI,
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
} from '../../../../../store/actions.js';
import UserForm from '../UserForm/';
import {IUser} from '../IUsers';

const UserUpdateModal = ({user, closeModal, updateUser}) => (
  <UpdateModal title={`Editando: ${user.username}`}
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
  </UpdateModal>
);

UserUpdateModal.propTypes = {
  user: T.shape(IUser),
  closeModal: T.func.isRequired,
  updateUser: T.func,
};

const mapStateToProps = (state) => {
  const key = get(state, 'ui.users.userSelectedToUpdateKey');
  return {
    user: get(state, `entities.users.${key}`)
  }
};

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    users: {
      displayingUpdateModal: false,
      userSelectedToUpdateKey: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
  updateUser: (key, body) => ({
    type: DISPATCH_MULTIPLE_ACTIONS,
    payload: [
      closeModal(), {
      type: API_UPDATE,
      payload: {
        endpoint: `/users/${key}`,
        body,
        key,
        target: 'users'
      }
    }]
  })
};

const UserUpdateModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserUpdateModal)
);

UserUpdateModalContainer.displayName = 'UserUpdateModalContainer';

export default UserUpdateModalContainer;
