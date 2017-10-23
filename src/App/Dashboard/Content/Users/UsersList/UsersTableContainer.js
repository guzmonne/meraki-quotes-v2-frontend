import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersTable from './UsersTable/';
import {UPDATE_UI} from '../../../../../store/actions.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.users.offset');
  const page = get(state, 'ui.users.page');
  const users = (
    get(state, 'ui.users.ids', [])
    .slice(offset * page, offset * page + page)
    .map(id => (
      get(state, `entities.users.${id}`)
    ))
  );

  return {
    users
  }
};

const mapActionsToProps = {
  displayDestroyModal: ({email}) => ({
    type: UPDATE_UI,
    payload: {
      users: {
        displayingDestroyModal: true,
        userSelectedToDestroy: btoa(JSON.stringify({email})),
      }
    }
  }),
  displayShowModal: (user) => ({
    type: UPDATE_UI,
    payload: {
      users: {
        displayingShowModal: true,
        userSelectedToShow: user,
      }
    }
  })
};

const UsersTableContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersTable)
);

UsersTableContainer.displayName = 'UsersTableContainer';

export default UsersTableContainer;
