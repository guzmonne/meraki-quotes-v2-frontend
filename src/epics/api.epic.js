import get from 'lodash/get';
import {normalize} from 'normalizr';
import {Observable} from 'rxjs/Observable'
import {
  ERROR,
  API_CALL,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
});

export default (action$, store) => (
  action$
  .ofType(API_CALL)
  .switchMap(({payload: {
    endpoint,
    method,
    body,
    schema,
    target,
    flag
  }}) => {
    const loading = Observable.of({
      type: `${target.toUpperCase()}_${flag.toUpperCase()}_REQUEST`
    });
    
    const ajaxMethod = Observable.ajax[method.toLowerCase()];

    if (!ajaxMethod) throw new Error('Method does not exist');

    const request = (
      body !== undefined 
      ? ajaxMethod(`${API_ROOT}${endpoint}`, body, headers())
      : ajaxMethod(`${API_ROOT}${endpoint}`, headers())
    ).map(({response}) => {
      if (schema) {
        return {
          type: `${target.toUpperCase()}_${flag.toUpperCase()}_SUCCESS`,
          payload: Object.assign(normalize(response, schema), {target}),
        };
      }

      return {
        type: `${target.toUpperCase()}_${flag.toUpperCase()}_SUCCESS`,
        payload: response,
      }
    })
    .catch((error) => {
      const name = get(error, 'response.name');

      console.error(error);

      if (name === 'ValidationError')
        return Observable.of({
          type: `${target.toUpperCase()}_${flag.toUpperCase()}_FAILURE`,
          payload: error.response,
        })

      return Observable.of({
        type: ERROR,
        payload: {
          name: error.name,
          message: error.message,
          stack: error.stack || (new Error()).stack
        },
      })
    })
    
    return Observable.concat(loading, request);
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
