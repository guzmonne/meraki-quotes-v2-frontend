import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Route, Switch} from '../../../../ListeningRouter/';
import UsersList from './UsersListContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/users" component={UsersList}/>
  </Switch>
);

export default Users;
