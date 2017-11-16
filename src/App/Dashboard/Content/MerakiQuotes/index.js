import React from 'react';
import {Route, Switch} from '../../../../ListeningRouter/';
import MerakiQuotesList from './MerakiQuotesListContainer.js';
import MerakiQuoteShow from './MerakiQuoteShowContainer.js';
import MerakiQuoteCreate from './MerakiQuoteCreateContainer.js';

const Users = () => (
  <Switch>
    <Route exact path="/merakiQuotes" component={MerakiQuotesList}/>
    <Route exact path="/merakiQuotes/new" component={MerakiQuoteCreate}/>
    <Route exact path="/merakiQuotes/:key" component={MerakiQuoteShow} />
  </Switch>
);

export default Users;
