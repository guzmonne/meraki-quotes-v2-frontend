import {Observable} from 'rxjs/Observable'
import {
  DISPATCH_MULTIPLE_ACTIONS
} from '../store/actions';

export default action$ => (
  action$
  .ofType(DISPATCH_MULTIPLE_ACTIONS)
  .switchMap(({payload}) => Observable.from(payload))
)
