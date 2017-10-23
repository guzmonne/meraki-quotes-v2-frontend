import {connect} from 'react-redux';
import get from 'lodash/get';
import UserCreate from './UserCreate/';
import {
  API_CREATE,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {user} from '../../../../store/schemas.js';

const empty = {
  username: '',
  email: '',
  password: '',
};

const mapStateToProps = (state) => ({
  user: get(state, 'ui.users.empty', {...empty}),
  error: get(state, 'ui.usersApiCreate.error'),
  creating: get(state, 'flags.usersApiCreate')
});

const createUser = (body) => ({
  type: API_CREATE,
  payload: {
    body,
    endpoint: '/users',
    schema: user,
    target: 'users',
    empty: {...empty}, 
  },
})

const mapActionsToProps = {
  createUser,
  resetForm: () => ({
    type: UPDATE_UI,
    payload: {
      users: {
        empty: {...empty},
      }
    }
  })
};

const UserCreateContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserCreate)
);

UserCreateContainer.displayName = 'UserCreateContainer';

export default UserCreateContainer;
