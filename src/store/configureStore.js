import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from '../reducers/';
import rootEpic from '../epics/';

const ENV = process.env.NODE_ENV;

const epicMiddleware = createEpicMiddleware(rootEpic);

let composeEnhancers;
if (ENV !== 'production')
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
else
  composeEnhancers = compose;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    )
  );
  
  if (ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers/', () => {
        const nextRootReducer = require('../reducers/').default
        store.replaceReducer(nextRootReducer)
      })
    }
  }

  return store
}

export default configureStore;
