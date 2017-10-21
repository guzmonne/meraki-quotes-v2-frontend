import merge from 'lodash/merge';
import camelCase from 'lodash/camelCase';
import * as ActionTypes from '../store/actions.js';

export default (state={}, action) => {
  
  if (action.type === ActionTypes.LOGIN_SUCCESS) {
    localStorage.setItem('TOKEN', action.payload);
    return state;
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
