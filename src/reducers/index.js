import * as ActionTypes from '../store/actions.js';
import {combineReducers} from 'redux';
import merge from 'lodash/merge.js';
import ui from './ui.reducer.js';
import flags from './flags.reducer.js';

const defaultEntitiesState = {
  users: {},
  merakiDevices: {},
  merakiQuotes: {},
  permissions: {},
};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = defaultEntitiesState, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
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
});

export default rootReducer;
