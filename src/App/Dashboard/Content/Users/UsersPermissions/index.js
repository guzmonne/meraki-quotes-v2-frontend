import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UsersPermissionsTable from './UsersPermissionsTableContainer.js'
import UserPermissionCreateModal from './UserPermissionCreateModalContainer.js';
import Button from '../../../../../common/Button/';
import Spinner from '../../../../../common/Spinner/';

class UsersPermissions extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }
  
  render() {
    const {
      count,
      fetching,
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
      {fetching === true && count === 0 &&
        <Spinner size="xl" />
      }
      {fetching === false && count === 0 &&
        <p>No se han encontrado permisos.</p>
      }
      {displayingCreateModal === true && 
        <UserPermissionCreateModal />
      }
      </Card>
    );
  }
}

UsersPermissions.propTypes = {
  count: T.number,
  fetching: T.bool,
  fetch: T.func,
  displayingCreateModal: T.bool,
};

export default UsersPermissions;
