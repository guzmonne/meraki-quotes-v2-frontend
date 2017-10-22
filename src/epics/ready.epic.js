import {Observable} from 'rxjs/Observable'
import {
  VALIDATE_TOKEN,
  UPDATE_FLAGS,
  LOGIN_SUCCESS,
  REDIRECT
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export default action$ => (
  action$
  .ofType(VALIDATE_TOKEN)
  .switchMap(() => (
    Observable.interval(1000 * 60 * 5) // 5 minutes
    .startWith(1)
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
      .catch(error => (
        Observable.from([{
          type: UPDATE_FLAGS,
          payload: {
            ready: true,
            isAuthenticated: false,
          }
        }, {
          type: REDIRECT,
          payload: '/'
        }])
      ))
    ))
  ))
);
