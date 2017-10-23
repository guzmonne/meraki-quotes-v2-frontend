import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersList from './UsersList/';
import {
  API_CALL,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {user} from '../../../../store/schemas.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.users.offset');
  const page = get(state, 'ui.users.page');
  const ids = get(state, 'ui.users.ids', []);
  
  let prevItemID = (
    (offset - 1) * page <= 0 ? ids[0] : ids[(offset - 1) * page]
  );
  let prevItemKey = btoa(JSON.stringify({
    email: get(state, `entities.users.${prevItemID}.email`, {})
  }));
  
  let nextItemID = (
    offset * page + page - 1 >= ids.length 
    ? ids[ids.length - 1] 
    : ids[offset * page + page - 1]
  );
  let nextItemKey = btoa(JSON.stringify({
    email: get(state, `entities.users.${nextItemID}.email`, {})
  }));

  return {
    offset,
    page,
    nextItemKey,
    prevItemKey,
    numberOfUsers: get(state, 'ui.users.ids', []).length,    
    fetching: get(state, 'flags.usersIndex'),
  }
};

const updateUI = (page, offset) => ({
  type: UPDATE_UI,
  payload: {
    users: {
      offset,
      page,
    }
  }
});

const fetchUsers = (page=10, offset) => {
  let endpoint = `/users?limit=${page * 2}`
  
  if (offset)
    endpoint += `&offset=${offset}`

  return {
    type: API_CALL,
    payload: {
      endpoint,
      method: 'GET',
      schema: [user],
      target: 'users',
      flag: 'index',
    },
  }
}

const mapActionsToProps = {
  paginate: (offset, page, lastItemKey) => {
    if (offset < 0) offset = 0
    return {
      type: DISPATCH_MULTIPLE_ACTIONS,
      payload: [updateUI(page, offset), fetchUsers(page, lastItemKey)]
    }
  },
  fetchUsers,
};

const UsersListContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersList)
);

UsersListContainer.displayName = 'UsersListContainer';

export default UsersListContainer;
