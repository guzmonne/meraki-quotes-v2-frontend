import get from 'lodash/get';
import {normalize} from 'normalizr';
import {Observable} from 'rxjs/Observable'
import {
  ERROR,
  API_INDEX,
  API_CREATE,
  API_SHOW,
  API_UPDATE,
  API_DESTROY,
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
    type: `${actionPrefix(type, payload)}_REQUEST`
  })
}

function get$(type, payload) {
  const {endpoint, schema, target} = payload
  return Observable.ajax.get(`${API_ROOT}${endpoint}`, headers())
    .map(({response}) => {
      return {
        type: `${actionPrefix(type, payload)}_SUCCESS`,
        payload: Object.assign(normalize(response, schema), {target}),
      };
    })
    .catch(validationErrorHandler.bind(null, type, payload))
}

function create$(type, payload) {
  const {endpoint, schema, body, target} = payload
  return Observable.ajax.post(`${API_ROOT}${endpoint}`, body, headers())
    .map(({response}) => {
      return {
        type: `${actionPrefix(type, payload)}_SUCCESS`,
        payload: Object.assign(normalize(response, schema), {target}),
      };
    })
    .catch(validationErrorHandler.bind(null, type, payload))
}

function update$(type, payload) {
  const {endpoint, schema, body, target} = payload
  return Observable.ajax.put(`${API_ROOT}${endpoint}`, body, headers())
    .map(({response}) => {
      return {
        type: `${actionPrefix(type, payload)}_SUCCESS`,
        payload: Object.assign(normalize(response, schema), {target}),
      };
    })
    .catch(validationErrorHandler.bind(null, type, payload))
}

function destroy$(type, payload) {
  const {endpoint, schema, target} = payload
  return Observable.ajax.delete(`${API_ROOT}${endpoint}`, headers())
    .map(({response}) => {
      return {
        type: `${actionPrefix(type, payload)}_SUCCESS`,
        payload: Object.assign(normalize(response, schema), {target}),
      };
    })
    .catch(validationErrorHandler.bind(null, type, payload))
}

function error$(type, payload, error) {
  return Observable.of({
    type: `${actionPrefix(type, payload)}_FAILUIRE`,
    payload: {
      name: error.name,
      message: error.message,
      stack: error.stack || (new Error()).stack
    },
  });
}

function validationError$(type, payload, error) {
  return Observable.of({
    type: `${actionPrefix(type, payload)}_FAILURE`,
    payload: error.response,
  });
}

function validationErrorHandler(type, payload, error) {
  const name = get(error, 'response.name');

  if (name === 'ValidationError')
    return validationError$(type, payload, error);

  return error$(type, payload, error)
}
