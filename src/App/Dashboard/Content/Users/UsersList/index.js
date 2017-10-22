import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';

class UsersList extends React.Component {
  render() {
    return (
      <Card className="UsersList">
        <h1>Usuarios</h1>
      </Card>
    );
  } 
}

UsersList.propTypes = {
  fetchUsers: T.func.isRequired,
}

export default UsersList;
