import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import UsersList from './UsersListContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/users" component={UsersList}/>
  </Switch>
);

export default Users;
