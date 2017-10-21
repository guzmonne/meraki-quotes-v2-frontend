import {combineEpics} from 'redux-observable';
import pingEpic from './ping.epic.js';
import authEpic from './auth.epic.js';

export default combineEpics(
  pingEpic,
  authEpic,
);
