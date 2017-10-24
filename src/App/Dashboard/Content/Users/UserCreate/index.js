import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UserForm from '../UserForm/';
import {IUser} from '../IUsers.js';

const empty = {
  username: '',
  password: '',
  email: '',
};

class UserCreate extends React.Component {
  componentWillMount() {
    this.props.setForm({...empty});
  }

  render() {
    const {user, error, createUser, creating} = this.props

    return (
      <Card className="UserCreate">
        <h1>Crear Nuevo Usuario</h1>
        <UserForm 
          user={user}
          onSubmit={(body) => createUser(body, {...empty})}
          error={error}
          loading={creating}
        />
      </Card>
    )
  }
}

UserCreate.propTypes = {
  user: T.shape(IUser),
  error: T.object,
  createUser: T.func,
  creating: T.bool,
  setForm: T.func.isRequired,
};

export default UserCreate;
