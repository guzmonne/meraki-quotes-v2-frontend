import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UserForm from '../UserForm/';

class UserCreate extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    }
  }
  
  render() {
    const {user} = this.state;

    return (
      <Card className="UserCreate">
        <h1>Crear Nuevo Usuario</h1>
        <UserForm user={user}/>
      </Card>
    );
  }
}

export default UserCreate;
