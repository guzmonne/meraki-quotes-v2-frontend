// Polyfills
import 'whatwg-fetch'
// APP
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App/';
import ListeningRouter from './ListeningRouter/';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

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

registerServiceWorker();
