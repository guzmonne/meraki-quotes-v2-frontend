import './styles.css';
import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import MerakiQuotesList from './MerakiQuotesListContainer.js';
import MerakiQuoteCreate from './MerakiQuoteCreateContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/merakiQuotes" component={MerakiQuotesList}/>
    <Route exact path="/merakiQuotes/new" component={MerakiQuoteCreate}/>
  </Switch>
);

export default Users;
