import merge from 'lodash/merge';
import union from 'lodash/union';
import indexOf from 'lodash/indexOf';
import camelCase from 'lodash/camelCase';
import * as ActionTypes from '../store/actions.js';

const defaultState = {
  users: {
    offset: 0,
    page: 10,
    ids: [],
    form: {
      username: '',
      password: '',
      email: '',
    }
  },
  permissions: {
    ids: [],
    form: {
      permission: '',
      method: '',
      url: '',
    }
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
        return Object.assign({}, state);
      }
    case ActionTypes.UPDATE_UI:
      return merge({}, state, payload);
    default:
  }

  if (type.indexOf('API_INDEX_SUCCESS') > -1) {
    try {
      const {target, result} = payload;
      return {
        ...state,
        [target]: {
          ...state[target],
          ids: union(state[target].ids, result),
        }
      };
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (type.indexOf('API_CREATE_SUCCESS') > -1) {
    try {
      const {target, result} = payload;
      return {
        ...state,
        [target]: {
          ...state[target],
          ids: [...(state[target].ids || []), result],
        }
      };
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (type.indexOf('API_CREATE_REQUEST') > -1) {
    try {
      const {target, formName, formData} = payload;
      return {
        ...state,
        [camelCase(type.split('_REQUEST')[0])]: undefined,
        [target]: {
          ...state[target],
          [formName]: formData,
        },
      };
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (type.indexOf('API_DESTROY_REQUEST') > -1) {
    try {
      const {target, id} = payload;
      const ids = state[target].ids;

      return {
        ...state,
        [target]: {
          ...state[target],
          ids: state[target].ids.filter((_id) => _id !== id),
          destroyedIds: {
            ...state[target].destroyedIds,
            [id]: indexOf(ids, id),
          },
        }
      };
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
  }

  if (type.indexOf('API_DESTROY_FAILURE') > -1) {
    console.log('destroy');
    try {
      const {target, id} = payload;
      const ids = state[target].ids;
      const index = state[target].destroyedIds[id];
      return merge(state, {
        [target]: {
          error: `An error occurred while destroying the target`,
          ids: [...ids.slice(0, index), id, ...ids.slice(index, ids.length)]
        }
      })
    } catch (error) {
      console.error(error);
      return Object.assign({}, state);
    }
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

  if (type === ActionTypes.RELOAD) {
    window.location.reload();
  }

  return Object.assign({}, state);
}
