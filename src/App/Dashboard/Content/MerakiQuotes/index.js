import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import MerakiQuotesList from './MerakiQuotesListContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/merakiQuotes" component={MerakiQuotesList}/>
  </Switch>
);

export default Users;
