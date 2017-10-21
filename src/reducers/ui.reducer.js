import merge from 'lodash/merge';
import camelCase from 'lodash/camelCase';
import * as ActionTypes from '../store/actions.js';

const defaultState = {}

export default (state=defaultState, {type, payload}) => {

  switch (type) {
    case ActionTypes.LOGOUT:
      localStorage.removeItem('TOKEN');
      return {
        ...state,
        user: undefined,
      }
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('TOKEN', payload);
      try {
        return {
          ...state,
          user: JSON.parse(atob(payload.split('.')[1])),
        }
      } catch (error) {
        console.log(error);
        return state;
      }
    default:
  }

  if (type.indexOf('_REQUEST') > -1) {
    return Object.assign({}, state, {
      [camelCase(type.split('_REQUEST')[0])]: {
        error: undefined, 
      }
    })
  }

  if (type.indexOf('_FAILURE') > -1) {
    return merge({}, state, {
      [camelCase(type.split('_FAILURE')[0])]: {
        error: payload, 
      }
    })
  }

  return state;
}
