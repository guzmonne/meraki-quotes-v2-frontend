import {combineEpics} from 'redux-observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/merge';
import authEpic from './auth.epic.js';
import readyEpic from './ready.epic.js';
import apiEpic from './api.epic.js';
import multipleEpic from './multiple.epic.js';

export default combineEpics(
  apiEpic,
  readyEpic,
  authEpic,
  multipleEpic,
);
