import {Observable} from 'rxjs/Observable'
import {
  ERROR,
  API_CALL,
} from '../store/actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const toAction = (endpoint) => (
  endpoint.replace('/', '').replace(/\//g, '_').toUpperCase()
);

const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
});

export default action$ => (
  action$
  .ofType(API_CALL)
  .switchMap(({payload: {endpoint, method, body}}) => {
    const loading = Observable.of({
      type: toAction(endpoint) + '_REQUEST',
    });
    
    const ajaxMethod = Observable.ajax[method.toLowerCase()];

    console.log(ajaxMethod);

    if (!ajaxMethod) throw new Error('Method does not exist');

    const request = (
      body !== undefined 
      ? ajaxMethod(`${API_ROOT}${endpoint}`, body, headers())
      : ajaxMethod(`${API_ROOT}${endpoint}`, headers())
    ).map(({response}) => ({
      type: toAction(endpoint) + '_SUCCESS',
      payload: response,
    }))
    .catch((error) => Observable.of({
      type: toAction(endpoint) + '_FAILURE',
      payload: error,
    }))
    
    return Observable.concat(loading, request);
  })
  .do(x => console.log(x))
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
