import {combineEpics} from 'redux-observable';
import authEpic from './auth.epic.js';

export default combineEpics(
  authEpic,
);
