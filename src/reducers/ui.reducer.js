import merge from 'lodash/merge';
import union from 'lodash/union';
import camelCase from 'lodash/camelCase';
import * as ActionTypes from '../store/actions.js';

const defaultState = {
  users: {
    offset: 0,
    page: 10,
  }
}

export default (state=defaultState, {type, payload}) => {

  switch (type) {
    case ActionTypes.LOGOUT_SUCCESS:
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
    case ActionTypes.UPDATE_UI:
      return merge({}, state, payload);
    default:
  }

  if (
    type.indexOf('API_INDEX_SUCCESS') > -1 && 
    payload && 
    payload.result && 
    payload.target
  ) {
    const {target, result} = payload;
    return merge(state, {
      [target]: {
        ids: union(state[target].ids, result),
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

  if (type === ActionTypes.REDIRECT && window.location.pathname !== payload) {
    window.location.href = payload;
  }

  return state;
}
