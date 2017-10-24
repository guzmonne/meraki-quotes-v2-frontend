import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersList from './UsersList/';
import {
  API_INDEX,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {user} from '../../../../store/schemas.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.users.offset');
  const page = get(state, 'ui.users.page');
  const ids = get(state, 'ui.users.ids', []);
  
  let prevItemKey = (
    (offset - 1) * page <= 0 ? ids[0] : ids[(offset - 1) * page]
  );
  
  let nextItemKey = (
    offset * page + page - 1 >= ids.length 
    ? ids[ids.length - 1] 
    : ids[offset * page + page - 1]
  );

  return {
    offset,
    page,
    nextItemKey,
    prevItemKey,
    numberOfUsers: get(state, 'ui.users.ids', []).length,    
    fetching: get(state, 'flags.usersApiIndex'),
    displayingDestroyModal: get(state, 'ui.users.displayingDestroyModal'),
    displayingShowModal: get(state, 'ui.users.displayingShowModal'),
    displayingUpdateModal: get(state, 'ui.users.displayingUpdateModal'),
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
  let endpoint = `/users?limit=${page * 3}`
  
  if (offset)
    endpoint += `&offset=${offset}`

  return {
    type: API_INDEX,
    payload: {
      endpoint,
      schema: [user],
      target: 'users',
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
