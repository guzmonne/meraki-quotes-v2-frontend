import {connect} from 'react-redux';
import get from 'lodash/get';
import UserDestroyModal from './UserDestroyModal/';
import {
  UPDATE_UI,
  REMOVE_ITEM_ID,
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => ({
  id: (
    get(state, 'ui.users.userSelectedForDestructionKey')
  ),
});

const mapActionsToProps = {
  closeModal: () => ({
    type: UPDATE_UI,
    payload: {
      users: {
        showDestroyModal: false,
        userSelectedForDestructionKey: undefined,
      }
    }
  }),
  destroyUser: (key) => ({
    type: REMOVE_ITEM_ID,
    payload: {
      target: 'users',
      key: key,
    }
  })
};

const UserDestroyModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserDestroyModal)
);

UserDestroyModalContainer.displayName = 'UserDestroyModalContainer';

export default UserDestroyModalContainer;
