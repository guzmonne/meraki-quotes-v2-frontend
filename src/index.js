// Moment
import moment from 'moment';
import 'moment/locale/es';
// APP
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App/';
import ListeningRouter from './ListeningRouter/';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';
// Configure moment
moment.locale('es');
// Start App.
ReactDOM.render(
  <BrowserRouter>
    <Provider store={configureStore()}>
      <ListeningRouter>
        <App />
      </ListeningRouter>    
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
// Service Worker.
registerServiceWorker();
