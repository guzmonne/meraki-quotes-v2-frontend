import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersPermissions from './UsersPermissions/';
import {permission} from '../../../../store/schemas.js';
import {
  API_INDEX,
} from '../../../../store/actions.js';

const mapStateToProps = (state) => {
  const ids = get(state, 'ui.permissions.ids', []);
  const permissions = get(state, 'entities.permissions', {});
  const permissionsList = ids.map(id => permissions[id]);
  
  return {
    permissions: permissionsList,
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
  })
};

const UsersPermissionsContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersPermissions)
);

UsersPermissionsContainer.displayName = 'UsersPermissionsContainer';

export default UsersPermissionsContainer;
