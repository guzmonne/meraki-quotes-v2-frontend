import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UsersPermissionsTable from './UsersPermissionsTableContainer.js'

class UsersPermissions extends React.Component {
  componentWillMount() {
    this.props.fetchPermissions();
  }
  
  render() {
    return (
      <Card className="UsersPermissions">
        <h1>Permisos de Usuarios</h1>
        <UsersPermissionsTable />
      </Card>
    );
  }
}

UsersPermissions.propTypes = {
  fetchPermissions: T.func,
};

export default UsersPermissions;
