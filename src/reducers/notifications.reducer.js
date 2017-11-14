import uniqueId from 'lodash/uniqueId';
import findIndex from 'lodash/findIndex';
import * as ActionTypes from '../store/actions.js';

const notificationsReducer = (state=[], action) => {
  if (action.type === ActionTypes.PUSH_NOTIFICATION) {
    try {
      const {type, message, id, fixed} = action.payload;

      const last = state[state.length - 1];

      // Avoid showing duplicate messages.
      if (last && last.message === message) return state;

      return [...state, {
        id: id || uniqueId('notification'),
        type,
        message,
        fixed,
      }];
    } catch (error) {
      console.error(error);
      return state;
    }
  }

  if (action.type === ActionTypes.POP_NOTIFICATION) {
    try {
      const index = findIndex(state, n => n.id === action.payload);

      if (index === undefined || index < 0)
        return state.slice(0, state.length - 1);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ];
    } catch (error) {
      console.error(error);
      return state;
    }
  }

  if (action.type === ActionTypes.FADE_OUT_NOTIFICATION) {
    try {
      const index = findIndex(state, n => n.id === action.payload);

      if (index === undefined || index < 0)
        return state.slice(0, state.length - 1);

      const fadeOutNotification = {
        ...state[index],
        fadeOut: true,
      };

      return [
        ...state.slice(0, index),
        fadeOutNotification,
        ...state.slice(index + 1, state.length)
      ];
    } catch (error) {
      console.error(error);
      return state;
    }
  }

  return state;  
}

export default notificationsReducer;
