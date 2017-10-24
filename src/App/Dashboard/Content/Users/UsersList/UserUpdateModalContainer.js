import {connect} from 'react-redux';
import get from 'lodash/get';
import UserUpdateModal from './UserUpdateModal/';
import {
  UPDATE_UI,
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
} from '../../../../../store/actions.js';

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
