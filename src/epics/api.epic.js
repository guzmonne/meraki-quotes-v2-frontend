import get from 'lodash/get';
import {normalize} from 'normalizr';
import {Observable} from 'rxjs/Observable'
import {
  ERROR,
  UPDATE_UI,
  API_INDEX,
  API_CREATE,
  API_SHOW,
  API_UPDATE,
  API_DESTROY,
  PUSH_NOTIFICATION,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export default (action$, store) => (
  action$
  .ofType(
    API_INDEX,
    API_CREATE,
    API_SHOW,
    API_UPDATE,
    API_DESTROY
  )
  .throttleTime(200)
  .switchMap(({type, payload}) => {
    let request$

    switch (type) {
      case API_SHOW:      
      case API_INDEX:
        request$ = get$;
        break;
      case API_CREATE:
        request$ = create$;
        break;
      case API_UPDATE:
        request$ = update$;
        break;
      case API_DESTROY:
        request$ = destroy$;
        break
      default:
        break;
    }

    return Observable.concat(
      loading$(type, payload),
      request$(type, payload)
    );
  })
  .catch(error => ( 
    Observable.of({
      type: ERROR,
      payload: {
        name: error.name,
        message: error.message,
        stack: error.stack || (new Error()).stack
      },
    })
  ))
)

function headers () {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
  }
};

function actionPrefix(type, {target}) {
  return `${target.toUpperCase()}_${type}`
}

function loading$ (type, payload) {
  return Observable.of({
    type: `${actionPrefix(type, payload)}_REQUEST`,
    payload
  })
}

function get$(type, payload) {
  const {endpoint, schema, target} = payload

  const request$ = (
    Observable.ajax.get(`${API_ROOT}${endpoint}`, headers())
    .concatMap(({response}) => Observable.from([{
      type: `${actionPrefix(type, payload)}_SUCCESS`,
      payload: Object.assign(normalize(response, schema), {target}),
    }]))
    .catch(validationErrorHandler.bind(null, type, payload))
  );

  return request$;
}

function create$(type, payload) {
  const {endpoint, schema, body, target, formData, formName='form'} = payload
  return Observable.ajax.post(`${API_ROOT}${endpoint}`, body, headers())
    .concatMap(() => Observable.from([{
      type: `${actionPrefix(type, payload)}_SUCCESS`,
      payload: Object.assign(normalize(body, schema), {target}),
    }, {
      type: UPDATE_UI,
      payload: {
        [target]: {
          [formName]: formData,
        }
      }
    }, {
      type: PUSH_NOTIFICATION,
      payload: {
        type: 'success',
        message: 'Elemento creado con exito.'
      }
    }]))
    .catch(error => (
      Observable.concat(
        validationErrorHandler(type, payload, error),
        Observable.of({
          type: UPDATE_UI,
          payload: {
            [target]: {
              [formName]: body
            }
          }
        })
      )
    ))
}

function update$(type, payload) {
  const {endpoint, body} = payload
  return Observable.ajax.put(`${API_ROOT}${endpoint}`, body, headers())
    .concatMap(({response}) => Observable.from([{
      type: `${actionPrefix(type, payload)}_SUCCESS`,
    }, {
      type: PUSH_NOTIFICATION,
      payload: {
        type: 'success',
        message: 'Se ha actualizado el elemento con exito.'
      }
    }]))
    .catch(validationErrorHandler.bind(null, type, payload))
}

function destroy$(type, payload) {
  const {endpoint, target, id} = payload
  return Observable.ajax.delete(`${API_ROOT}${endpoint}/${id}`, headers())
    .concatMap(({response}) => Observable.from([{
      type: `${actionPrefix(type, payload)}_SUCCESS`,
    }, {
      type: PUSH_NOTIFICATION,
      payload: {
        type: 'success',
        message: 'Elemento eliminado con exito.'
      }
    }]))
    .catch(error => (
      Observable.from([{
        type: `${actionPrefix(type, payload)}_FAILURE`,
        payload: {
          name: error.name,
          message: error.message,
          stack: error.stack || (new Error()).stack,
          response: error.response,
          id,
          target,
        },
      }, {
        type: PUSH_NOTIFICATION,
        payload: {
          type: 'danger',
          message: 'Ocurrio un error al intentar eliminar el elemento.'
        }
      }])
    ))
}

function error$(type, payload, error) {
  console.error(error);
  return Observable.from([{
    type: `${actionPrefix(type, payload)}_FAILURE`,
    payload,
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack || (new Error()).stack,
      response: error.response
    },
  }, {
    type: PUSH_NOTIFICATION,
    payload: {
      type: 'danger',
      message: 'Ha ocurrido un error inesperado.'
    }
  }]);
}

function validationError$(type, payload, error) {
  console.error(error);
  return Observable.from([{
    type: `${actionPrefix(type, payload)}_FAILURE`,
    payload: Object.assign({}, error.response, payload)
  }, {
    type: PUSH_NOTIFICATION,
    payload: {
      type: 'danger',
      message: 'Error de validación. Verifique sus datos.'
    }
  }]);
}

function validationErrorHandler(type, payload, error) {
  const name = get(error, 'response.name');

  if (name === 'ValidationError')
    return validationError$(type, payload, error);

  return error$(type, payload, error)
}
