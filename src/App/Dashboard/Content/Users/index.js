import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import UsersList from './UsersListContainer.js';
import UserCreate from './UserCreateContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/users" component={UsersList}/>
    <Route exact path="/users/new" component={UserCreate}/>
  </Switch>
);

export default Users;
