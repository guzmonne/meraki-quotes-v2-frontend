import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersTable from './UsersTable/';
import {API_CALL} from '../../../../../store/actions.js';
import {user} from '../../../../../store/schemas.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.users.offset');
  const page = get(state, 'ui.users.page');
  
  return {
    submitting: state.flags.login,
    users: (
      get(state, 'ui.users.ids', [])
      .slice(offset * page, offset * page + page)
      .map(id => (
        get(state, `entities.users.${id}`)
      ))
    )
  }
};

const mapActionsToProps = {};

const UsersTableContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersTable)
);

UsersTableContainer.displayName = 'UsersTableContainer';

export default UsersTableContainer;
