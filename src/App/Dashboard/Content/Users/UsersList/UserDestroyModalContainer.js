import {connect} from 'react-redux';
import get from 'lodash/get';
import UserDestroyModal from '../../Modals/DestroyModal/';
import {
  UPDATE_UI,
  API_DESTROY,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../../store/actions.js';

const mapStateToProps = (state) => ({
  id: (
    get(state, 'ui.users.userSelectedToDestroy')
  ),
  title: 'Eliminar usuario',
  message: '¿Esta seguro que desea eliminar al usuario?',
});

const closeModal = () => ({
  type: UPDATE_UI,
  payload: {
    users: {
      displayingDestroyModal: false,
      userSelectedToDestroy: undefined,
    }
  }
})

const mapActionsToProps = {
  closeModal,
  onDestroy: (id) => ({
    type: DISPATCH_MULTIPLE_ACTIONS,
    payload: [{
      type: API_DESTROY,
      payload: {
        endpoint: `/users`,
        target: 'users',
        id: id,
      },
    }, closeModal()]
  })
};

const UserDestroyModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserDestroyModal)
);

UserDestroyModalContainer.displayName = 'UserDestroyModalContainer';

export default UserDestroyModalContainer;
