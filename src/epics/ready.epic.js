import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import {
  IS_TOKEN_ACTIVE,
  TOKEN_IS_ACTIVE,
  TOKEN_EXPIRED,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export default action$ => (
  action$
  .ofType(IS_TOKEN_ACTIVE)
  .switchMap(() => (
    Observable.ajax.getJSON(
      `${API_ROOT}/users/active`, {
      'Content-Type': 'application/json'
    })
    .map(() => ({
      type: TOKEN_IS_ACTIVE
    }))
    .catch(error => Observable.of({
      type: TOKEN_EXPIRED,
    }))
  ))
);
