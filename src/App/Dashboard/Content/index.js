import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Redirect} from 'react-router';
import {Route, Switch} from '../../../ListeningRouter/';
import Login from './LoginContainer.js';
import Users from './Users/';
import Account from './Account/';
import MerakiDevices from './MerakiDevices/';
import MerakiQuotes from './MerakiQuotes/';
import RecoverPassword from './RecoverPasswordContainer.js';

const Welcome = () => <h1>Welcome!</h1>

const Content = ({isAuthenticated}) => (
  <div className="Content">
  {isAuthenticated === true
  ?
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/users" component={Users}/>
      <Route path="/account" component={Account}/>        
      <Route path="/merakiDevices" component={MerakiDevices}/>    
      <Route path="/merakiQuotes" component={MerakiQuotes}/>    
      <Redirect to="/"/>
    </Switch>
  :
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/recoverPassword" component={RecoverPassword}/>
      <Redirect to="/" />
    </Switch>
  }
  </div>
);

Content.propTypes = {
  isAuthenticated: T.bool,
}

export default Content;
