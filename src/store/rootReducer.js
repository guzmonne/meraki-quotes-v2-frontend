import * as ActionTypes from './actions.js';
import {combineReducers} from 'redux';
import merge from 'lodash/merge.js';

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
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  errorMessage
});

export default rootReducer;
