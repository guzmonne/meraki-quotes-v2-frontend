import {connect} from 'react-redux';
import get from 'lodash/get';
import UserShowModal from './UserShowModal/';
import {
  UPDATE_UI,
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => {
  const key = get(state, 'ui.users.userSelectedToShowKey')
  return {
    user: get(state, `entities.users.${key}`),
  }
};

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    users: {
      displayingShowModal: false,
      userSelectedToShow: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
};

const UserShowModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserShowModal)
);

UserShowModalContainer.displayName = 'UserShowModalContainer';

export default UserShowModalContainer;
