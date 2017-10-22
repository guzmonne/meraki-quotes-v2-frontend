import get from 'lodash/get';
import {Observable} from 'rxjs/Observable'
import {
  ERROR,
  REDIRECT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_FLAGS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
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
);

const logout$ = () => (
  Observable.ajax.get(
    `${API_ROOT}/users/logout`, {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
  })
  .concatMap(({response}) => (
    Observable.from([{
      type: LOGOUT_SUCCESS
    }, {
      type: REDIRECT,
      payload: '/'
    }])
  ))
  .catch(error => ( 
    Observable.of({
      type: LOGOUT_FAILURE,
      payload: error,
    })
  ))
);

export default action$ => (
  action$
  .ofType(LOGIN_REQUEST, LOGOUT_REQUEST)
  .switchMap((action) => {
    if (action.type === LOGIN_REQUEST)
      return loginRequest$(action)
    else if (action.type === LOGOUT_REQUEST)
      return logout$(action)
  })
)
