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
  LOGOUT,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const KNOWN_ERRORS = [
  'ValidationError',
  'IncorrectPassword',
];

const loginRequest$ = ({type, payload}) => (
  Observable.ajax.post(
    `${API_ROOT}/users/login`,
    get(payload, 'body'), {
    'Content-Type': 'application/json'
  })
  .concatMap(({response}) => (
    Observable.from([{
      type: LOGIN_SUCCESS,
      payload: response.token,
    }, {
      type: UPDATE_FLAGS,
      payload: {
        isAuthenticated: true,
      }
    }])
  ))
);

const logout$ = () => (
  Observable.of({
    type: UPDATE_FLAGS,
    payload: {
      isAuthenticated: false,
    }
  })
);

export default action$ => (
  action$
  .ofType(LOGIN_REQUEST, LOGOUT)
  .switchMap((action) => {
    if (action.type === LOGIN_REQUEST)
      return loginRequest$(action)
    else if (action.type === LOGOUT)
      return logout$(action)
  })
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
)
