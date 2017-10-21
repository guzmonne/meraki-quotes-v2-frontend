import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import {
  VALIDATE_TOKEN,
  UPDATE_FLAGS,
  LOGIN_SUCCESS
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export default action$ => (
  action$
  .ofType(VALIDATE_TOKEN)
  .switchMap(() => (
    Observable.ajax.getJSON(
      `${API_ROOT}/users/active`, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
    })
    .concatMap(() => Observable.from([{
      type: UPDATE_FLAGS,
      payload: {
        isAuthenticated: true,
      }
    }, {
      type: LOGIN_SUCCESS,
      payload: localStorage.getItem('TOKEN'),
    }, {
      type: UPDATE_FLAGS,
      payload: {
        ready: true,
      }
    }]))
    .catch(error => Observable.of({
      type: UPDATE_FLAGS,
      payload: {
        ready: true,
        isAuthenticated: false,
      }
    }))
  ))
);
