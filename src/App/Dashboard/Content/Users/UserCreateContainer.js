import {connect} from 'react-redux';
import get from 'lodash/get';
import UserCreate from './UserCreate/';
import {
  API_CREATE,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {user} from '../../../../store/schemas.js';

const mapStateToProps = (state) => ({
  user: get(state, 'ui.users.form'),
  error: get(state, 'ui.usersApiCreate.error'),
  creating: get(state, 'flags.usersApiCreate')
});

const createUser = (body, formData) => ({
  type: API_CREATE,
  payload: {
    body,
    endpoint: '/users',
    schema: user,
    target: 'users',
    formData,
    formName: 'form',
  },
})

const mapActionsToProps = {
  createUser,
  setForm: (form) => ({
    type: UPDATE_UI,
    payload: {
      users: {
        form,
      }
    }
  })
};

const UserCreateContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserCreate)
);

UserCreateContainer.displayName = 'UserCreateContainer';

export default UserCreateContainer;
