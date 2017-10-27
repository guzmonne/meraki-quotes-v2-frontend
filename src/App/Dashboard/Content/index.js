import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Route, Switch} from '../../../ListeningRouter/';
import Login from './LoginContainer.js';
import Users from './Users/';
import Account from './Account/';
import MerakiDevices from './MerakiDevices/';
//import MerakiQuotes from './MerakiQuotes/';

const Welcome = () => <h1>Welcome!</h1>

const NotFound = () => <h1>Not Found</h1>

const Content = ({isAuthenticated}) => (
  <div className="Content">
  {isAuthenticated === true
  ?
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/users" component={Users}/>
      <Route path="/account" component={Account}/>        
      <Route path="/merakiDevices" component={MerakiDevices}/>    
      <Route component={NotFound}/>
    </Switch>
  :
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  }
  </div>
);

Content.propTypes = {
  isAuthenticated: T.bool,
}

export default Content;
