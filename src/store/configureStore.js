import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import auth from '../middlewares/auth.js';
import rootReducer from './rootReducer.js';

const ENV = process.env.NODE_ENV;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, auth),
      typeof window !== 'undefined' &&
      ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  if (ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./rootReducer.js', () => {
        const nextRootReducer = require('./rootReducer.js').default
        store.replaceReducer(nextRootReducer)
      })
    }
  }

  return store
}

export default configureStore;
