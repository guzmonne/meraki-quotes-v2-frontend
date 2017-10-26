import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import MerakiDevicesList from './MerakiDevicesListContainer.js';
import MerakiDeviceCreate from './MerakiDeviceCreateContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/merakiDevices" component={MerakiDevicesList}/>
    <Route exact path="/merakiDevices/new" component={MerakiDeviceCreate}/>
  </Switch>
);

export default Users;
