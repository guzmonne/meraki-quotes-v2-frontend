import get from 'lodash/get';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import {
  ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_FLAGS,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const KNOWN_ERRORS = [
  'ValidationError',
  'IncorrectPassword',
];

export default action$ => (
  action$
  .ofType(LOGIN_REQUEST)
  .switchMap(({payload}) => (
    Observable.ajax.post(
      `${API_ROOT}/users/login`,
      payload.body, {
      'Content-Type': 'application/json'
    })
    .concatMap(({response}) => Observable.from([{
      type: LOGIN_SUCCESS,
      payload: response.token,
    }, {
      type: UPDATE_FLAGS,
      payload: {
        isAuthenticated: true,
      }
    }]))
    .catch(error => {
      if (KNOWN_ERRORS.indexOf(get(error, 'response.name')) > -1)
        return Observable.of({
          type: LOGIN_FAILURE,
          payload: get(error, 'response'),
        });
      return Observable.of({
        type: ERROR,
        payload: error,
      });
    })
  ))
)
