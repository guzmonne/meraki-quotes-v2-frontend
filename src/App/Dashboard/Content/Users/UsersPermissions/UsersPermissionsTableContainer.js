import {connect} from 'react-redux';
import get from 'lodash/get';
import UsersPermissionsTable from './UsersPermissionsTable/';


const mapStateToProps = (state) => {
  const ids = get(state, 'ui.permissions.ids', []);
  const permissions = get(state, 'entities.permissions', {});
  const permissionsList = ids.map(id => permissions[id]);
  
  return {
    permissions: permissionsList,
    displayingCreateModal: get(state, 'ui.permissions.displayingCreateModal')
  }
};

const mapActionsToProps = {};

const UsersPermissionsTableContainer = (
  connect(mapStateToProps, mapActionsToProps)(UsersPermissionsTable)
);

UsersPermissionsTableContainer.displayName = 'UsersPermissionsTableContainer';

export default UsersPermissionsTableContainer;
