import merge from 'lodash/merge';
import camelCase from 'lodash/camelCase';
import * as ActionTypes from '../store/actions.js';

const defaultState = {
  ready: false,
}

export default (state=defaultState, action) => {

  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('TOKEN', action.payload);
      return state;
    default:
  }

  if (action.type.indexOf('_REQUEST') > -1) {
    return Object.assign({}, state, {
      [camelCase(action.type.split('_REQUEST')[0])]: {
        error: undefined, 
      }
    })
  }

  if (action.type.indexOf('_FAILURE') > -1) {
    return merge({}, state, {
      [camelCase(action.type.split('_FAILURE')[0])]: {
        error: action.payload, 
      }
    })
  }

  return state;
}
