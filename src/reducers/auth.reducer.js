import * as ActionTypes from '../store/actions.js';

const defaultState = {
  errors: undefined,
};

export default (state=defaultState, action) => {
  if (action.type === ActionTypes.LOGIN_REQUEST)
    return {...defaultState};

  if (action.type === ActionTypes.LOGIN_SUCCESS) {
    localStorage.setItem('TOKEN', action.payload);
    return state;
  }
    
  if (action.type === ActionTypes.LOGIN_FAILURE)
    return {...state, errors: action.payload}

  return state;
}
