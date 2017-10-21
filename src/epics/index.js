import {combineEpics} from 'redux-observable';
import authEpic from './auth.epic.js';
import readyEpic from './ready.epic.js';

export default combineEpics(
  readyEpic,
  authEpic,
);
