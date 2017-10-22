import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Route, Switch} from '../../../ListeningRouter/';
import Login from './LoginContainer.js';
import Account from './Account/';

const Welcome = () => <h1>Welcome!</h1>

const NotFound = () => <h1>Not Found</h1>

const Content = ({isAuthenticated}) => (
  <div className="Content">
  {isAuthenticated === true
  ?
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/account" component={Account}/>        
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
