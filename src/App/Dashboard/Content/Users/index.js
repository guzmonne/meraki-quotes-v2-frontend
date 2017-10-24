import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import UsersList from './UsersListContainer.js';
import UserCreate from './UserCreateContainer.js';
import UsersPermissions from './UsersPermissionsContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/users" component={UsersList}/>
    <Route exact path="/users/new" component={UserCreate}/>
    <Route exact path="/users/permissions" component={UsersPermissions}/>
  </Switch>
);

export default Users;
