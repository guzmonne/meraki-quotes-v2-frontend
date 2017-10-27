import React from 'react';
import T from 'prop-types';
import 
  createUpdateModalContainer 
from '../../Modals/createUpdateModalContainer.js';
import UserForm from '../UserForm/';
import {IUser} from '../IUsers';

const UserUpdateModal = ({
  user,
  onUpdate,
}) => (
  <UserForm user={user}
    color="orange"
    fieldsDisabled={{
      email: true,
      password: true,
    }}
    onSubmit={({username, email}) => {
      onUpdate(btoa(JSON.stringify({email})), {username})
    }}
  />
);

UserUpdateModal.propTypes = {
  user: T.shape(IUser),
  onUpdate: T.func.isRequired,
};

export default createUpdateModalContainer({
  uiKeyName: 'usersSelectedToUpdateKey',
  modelName: 'user',
  modalFlagName: 'displayingUpdateModal',
  updateUiPayload: {
    userSelectedToUpdateKey: undefined,
  },
  target: 'users',
  title: ({username}) => (
    `Editando usuario: ${username}]`
  ),
  displayName:'UserUpdateModal',
})(UserUpdateModal);
