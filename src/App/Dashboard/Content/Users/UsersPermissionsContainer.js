import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersPermissions from './UsersPermissions/';
import {permission} from '../../../../store/schemas.js';
import {
  API_INDEX,
  UPDATE_UI,
} from '../../../../store/actions.js';

const mapStateToProps = (state) => {
  const ids = get(state, 'ui.permissions.ids', []);
  const permissions = get(state, 'entities.permissions', {});
  const permissionsList = ids.map(id => permissions[id]);
  
  return {
    permissions: permissionsList,
    displayingCreateModal: get(state, 'ui.permissions.displayingCreateModal'),
  }
};

const mapActionsToProps = {
  fetchPermissions: () => ({
    type: API_INDEX,
    payload: {
      endpoint: '/users/permissions',
      schema: [permission],
      target: 'permissions',
    },
  }),
  displayCreateModal: () => ({
    type: UPDATE_UI,
    payload: {
      permissions: {
        displayingCreateModal: true,
      }
    }
  })
};

const UsersPermissionsContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersPermissions)
);

UsersPermissionsContainer.displayName = 'UsersPermissionsContainer';

export default UsersPermissionsContainer;
