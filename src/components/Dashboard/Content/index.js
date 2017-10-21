import './styles.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Login from './LoginContainer.js';

const NotFound = () => <h1>Not Found</h1>

const Content = () => (
  <div className="Content">
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default Content;
