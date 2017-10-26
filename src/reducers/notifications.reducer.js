import uniqueId from 'lodash/uniqueId';
import findIndex from 'lodash/findIndex';
import * as ActionTypes from '../store/actions.js';

const notificationsReducer = (state=[], action) => {
  if (action.type === ActionTypes.PUSH_NOTIFICATION) {
    try {
      const {type, message, id, fixed} = action.payload;
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

      if (index === undefined || index < -1)
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

  return state;  
}

export default notificationsReducer;
