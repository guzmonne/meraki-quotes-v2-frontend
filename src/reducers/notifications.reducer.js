import * as ActionTypes from '../store/actions.js';
import isNumber from 'lodash/isNumber';
import findIndex from 'lodash/findIndex';
import isEqual from 'lodash/isEqual';

const notificationsReducer = (state=[], action) => {
  if (action.type === ActionTypes.PUSH_NOTIFICATION) {
    try {
      const {type, message} = action.payload;
      return [...state, {type, message}];
    } catch (error) {
      console.error(error);
      return state;
    }
  }

  if (action.type === ActionTypes.FADE_OUT_NOTIFICATION) {
    const index = findIndex(state, n => isEqual(n, action.payload));

    if (index === undefined || index < 0) return state;

    const notification = state[index];

    if (notification === undefined) return state;

    notification.fadeOut = true;

    return [
      ...state.slice(0, index), 
      notification,
      ...state.slice(index + 1, state.length)];
  }

  if (action.type === ActionTypes.POP_NOTIFICATION) {
    const index = (
      isNumber(action.payload) === true
      ? action.payload
      : findIndex(state, n => isEqual(n, {...action.payload, fadeOut: true}))
    );

    console.log(index);

    if (index === undefined || index < 0) return state;

    return [...state.slice(0, index), ...state.slice(index + 1, state.length)]
  }

  return state;  
}

export default notificationsReducer;
