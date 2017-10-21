import toCamelCase from 'lodash/camelCase.js';
import {UPDATE_FLAGS} from '../store/actions.js';

const defaultState = {};

export default (state=defaultState, {type, payload}) => {
  if (type.indexOf('_REQUEST') > -1)
    return {...state, [toCamelCase(type.split('_REQUEST')[0])]: true}

  if (type.indexOf('_SUCCESS') > -1)
    return {...state, [toCamelCase(type.split('_SUCCESS')[0])]: false}

  if (type.indexOf('_FAILURE') > -1)
    return {...state, [toCamelCase(type.split('_FAILURE')[0])]: false}

  if (type === UPDATE_FLAGS) {
    return {
      ...state,
      ...payload,
    }
  }

  return state;
}
