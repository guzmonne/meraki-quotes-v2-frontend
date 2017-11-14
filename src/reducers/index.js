import * as ActionTypes from '../store/actions.js';
import {combineReducers} from 'redux';
import merge from 'lodash/merge';
import get from 'lodash/get'
import ui from './ui.reducer.js';
import flags from './flags.reducer.js';
import {routeReducer} from '../ListeningRouter/';
import notificationsReducer from './notifications.reducer.js';

const defaultEntitiesState = {
  users: {},
  merakiDevices: {},
  merakiQuotes: {},
  permissions: {},
};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = defaultEntitiesState, action) => {
  const entities = get(action, 'payload.entities');

  if (entities) {
    return merge({}, state, entities)
  }

  if (action.type.indexOf('API_UPDATE_REQUEST') > -1) {
    try {
      const {payload: {key, body, target}} = action;

      const item = { ...state[target][key] };

      const __old__ = item.__old__ ? item.__old__ : item

      return merge({}, state, {
        [target]: {
          [key]: {
            ...body,
            __old__,
          }
        }
      });
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (action.type.indexOf('API_UPDATE_FAILURE') > -1) {
    try {
      const {payload: {key, target}} = action;
      const result = merge({}, state, {
        [target]: {
          [key]: {
            ...state[target][key].__old__,
          },
        }
      });
      delete state[target][key].__old__;
      return result;
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (action.type.indexOf('API_UPDATE_SUCCESS') > -1) {
    try {
      const { payload: { key, target } } = action;
      const newState = merge({}, state);
      delete newState[target][key].__old__;
      return newState;
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  return state
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, payload } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (payload && payload.error) {
    return payload.error
  }

  return state
}

const rootReducer = combineReducers({
  ui,
  entities,
  errorMessage,
  flags,
  location: routeReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
