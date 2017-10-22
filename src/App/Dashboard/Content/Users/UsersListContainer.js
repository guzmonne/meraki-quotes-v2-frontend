import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersList from './UsersList/';
import {API_CALL} from '../../../../store/actions.js';

const mapStateToProps = (state) => ({
  submitting: state.flags.login,
  errors: get(state, 'ui.login.error'),
});

const mapActionsToProps = {
  fetchUsers: (body) => ({
    type: API_CALL,
    payload: {
      endpoint: '/users',
      method: 'GET',
    }
  })
};

const UsersListContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersList)
);

UsersListContainer.displayName = 'UsersListContainer';

export default UsersListContainer;
