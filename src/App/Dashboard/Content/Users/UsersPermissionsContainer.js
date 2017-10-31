import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersPermissions from './UsersPermissions/';
import {permission} from '../../../../store/schemas.js';
import {
  API_INDEX,
  UPDATE_UI,
} from '../../../../store/actions.js';

const mapStateToProps = (state) => ({
  count: Object.keys(get(state, 'entities.permissions', {})).length,
  fetching: get(state, 'flags.permissionsApiIndex'),
  displayingCreateModal: get(state, 'ui.permissions.displayingCreateModal'),
});

const mapActionsToProps = {
  fetch: () => ({
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
