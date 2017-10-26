import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UsersPermissionsTable from './UsersPermissionsTableContainer.js'
import UserPermissionCreateModal from './UserPermissionCreateModalContainer.js';
import Button from '../../../../../common/Button/';

class UsersPermissions extends React.Component {
  componentWillMount() {
    this.props.fetchPermissions();
  }
  
  render() {
    const {
      displayCreateModal,
      displayingCreateModal
    } = this.props;
    return (
      <Card className="UsersPermissions">
        <h1>Permisos de Usuarios</h1>
        <Button type="button" 
          onClick={displayCreateModal}>
          Nuevo permiso
        </Button>
        <UsersPermissionsTable />
      {displayingCreateModal === true && 
        <UserPermissionCreateModal />
      }
      </Card>
    );
  }
}

UsersPermissions.propTypes = {
  fetchPermissions: T.func,
  displayingCreateModal: T.bool,
};

export default UsersPermissions;
