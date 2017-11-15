import {Observable} from 'rxjs/Observable'
import isArray from 'lodash/isArray.js';
import {
  DISPATCH_MULTIPLE_ACTIONS
} from '../store/actions';

export default action$ => (
  action$
  .ofType(DISPATCH_MULTIPLE_ACTIONS)
  .switchMap(({payload}) => {
    if (isArray(payload))
      return Observable.from(payload)
    
    const {actions, interval=0} = payload
    
    return (
      Observable
      .interval(interval)
      .startWith(-1)
      .take(actions.length)
      .map((i) => actions[i + 1])
    );
  })
  .catch(error => Observable.of({
    type: 'ERROR',
    payload: {
      message: error.message,
      stack: error.stack,
      name: error.name,
    },
  }))
)
