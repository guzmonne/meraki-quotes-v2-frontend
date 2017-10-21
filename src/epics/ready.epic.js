import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import {
  VALIDATE_TOKEN,
  UPDATE_FLAGS,
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
    .map(() => ({
      type: UPDATE_FLAGS,
      payload: {
        ready: true,
        isAuthenticated: true,
      }
    }))
    .catch(error => Observable.of({
      type: UPDATE_FLAGS,
      payload: {
        ready: true,
        isAuthenticated: false,
      }
    }))
  ))
);
