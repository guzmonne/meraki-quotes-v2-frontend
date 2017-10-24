import * as ActionTypes from '../store/actions.js';
import isNumber from 'lodash/isNumber';

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
    let index = action.payload;

    if (!isNumber(index)) index = state.length - 1;

    const notification = {...state[index]};

    notification.fadeOut = true;

    return [
      ...state.slice(0, index), 
      notification,
      ...state.slice(index + 1, state.length)];
  }

  if (action.type === ActionTypes.POP_NOTIFICATION) {
    const index = action.payload;
    return (
      isNumber(index) 
      ? [...state.slice(0, index), ...state.slice(index + 1, state.length)]
      : state.slice(1, state.length)
    )
  }

  return state;  
}

export default notificationsReducer;
