import {Observable} from 'rxjs/Observable'
import get from 'lodash/get';
import {
  ERROR,
  RELOAD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_FLAGS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  PUSH_NOTIFICATION
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const KNOWN_ERRORS = [
  'ValidationError',
  'IncorrectPassword',
  'UserDoesNotExists'
];

const HEADERS = {
  'Content-Type': 'application/json'
};

export const forgotPassword$ = (action$) => (
  action$
  .ofType(FORGOT_PASSWORD_REQUEST)
  .switchMap(({ payload: {body} }) => (Observable.ajax.post(
    `${API_ROOT}/users/forgotPassword`,
    body,
    HEADERS
  )))
  .switchMap(() => (Observable.from([{
    type: PUSH_NOTIFICATION,
    payload: {
      type: 'info',
      message: 'Revise su correo para obtener el link para cambiar su contraseña',
    }
  }, {
    type: FORGOT_PASSWORD_SUCCESS,
  }])))
  .catch(error => (Observable.from([{
    type: FORGOT_PASSWORD_FAILURE,
  }, {
    type: ERROR,
    payload: error,
  }, {
    type: PUSH_NOTIFICATION,
    payload: {
      message: 'Se ha producido un error inesperado.',
      type: 'danger',
    }
  }])))
);

export const loginRequest$ = (action$) => (
  action$
  .ofType(LOGIN_REQUEST)
  .switchMap(({payload: {body}}) => (
    Observable.ajax.post(
      `${API_ROOT}/users/login`,
      body, 
      HEADERS
    )
    .concatMap(({response}) => (
      Observable.from([{
        type: LOGIN_SUCCESS,
        payload: response.token,
      }, {
        type: UPDATE_FLAGS,
        payload: {
          isAuthenticated: true,
        }
      }, {
        type: PUSH_NOTIFICATION,
        payload: {
          message: 'Bienvenido a Conapps',
          type: 'info',
        }
      }])
    ))
    .catch(error => {
      if (KNOWN_ERRORS.indexOf(get(error, 'response.name')) > -1)
        return Observable.from([{
          type: LOGIN_FAILURE,
          payload: get(error, 'response'),
        }, {
          type: PUSH_NOTIFICATION,
          payload: {
            message: 'Error: Verifique sus credenciales.',
            type: 'danger',
          }
        }]);
      return Observable.from([{
        type: ERROR,
        payload: error,
      }, {
        type: PUSH_NOTIFICATION,
        payload: {
          message: 'Se ha producido un error inesperado.',
          type: 'danger',
        }
      }]);
    })
  ))
);

export const logoutRequest$ = (action$) => (
  action$
  .ofType(LOGOUT_REQUEST)
  .switchMap(() => (
    Observable.ajax.get(
      `${API_ROOT}/users/logout`, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
    })
    .concatMap(({response}) => (
      Observable.from([{
        type: LOGOUT_SUCCESS
      }, {
        type: RELOAD
      }])
    ))
    .catch(error => ( 
      Observable.from([{
        type: LOGOUT_FAILURE,
        payload: error,
      }, {
        type: PUSH_NOTIFICATION,
        payload: {
          message: 'Se ha producido un error al intentar cerrar su sesión.',
          type: 'danger',
        }
      }])
    ))
  ))
);
