import {connect} from 'react-redux';
import get from 'lodash/get';
import UserPermissionCreateModal from './UserPermissionCreateModal/';
import {permission} from '../../../../../store/schemas.js';
import {API_CREATE, UPDATE_UI} from '../../../../../store/actions.js';

const mapStateToProps = (state) => ({
  permission: get(state, 'ui.permissions.form'),
  error: get(state, 'ui.permissionsApiCreate.error'),
  creating: get(state, 'flags.permissionsApiCreate'),
});

const createPermission = (body, formData) => ({
  type: API_CREATE,
  payload: {
    body,
    endpoint: '/users/permissions',
    schema: permission,
    target: 'permissions',
    formData,
    formName: 'form',
  },
})

const mapActionsToProps = {
  createPermission,
  closeModal: () => ({
    type: UPDATE_UI,
    payload: {
      permissions: {
        displayingCreateModal: false,
      }
    }
  })
};

const UserPermissionCreateModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserPermissionCreateModal)
);

UserPermissionCreateModalContainer.displayName = 'UserPermissionCreateModalContainer';

export default UserPermissionCreateModalContainer;
