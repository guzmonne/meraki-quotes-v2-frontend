import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import MerakiDevicesList from './MerakiDevicesListContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/merakiDevices" component={MerakiDevicesList}/>
  </Switch>
);

export default Users;
