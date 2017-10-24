import {Observable} from 'rxjs/Observable'
import {
  PUSH_NOTIFICATION,
  POP_NOTIFICATION,
  FADE_OUT_NOTIFICATION,
} from '../store/actions';

const ANIMATION = 1000;

export default action$ => (
  action$
  .ofType(PUSH_NOTIFICATION)
  .mergeMap(({payload}) => (
    Observable.concat(
      Observable.of({ 
        type: FADE_OUT_NOTIFICATION,
        payload,
      }).delay(2 * ANIMATION),
      Observable.of({ 
        type: POP_NOTIFICATION,
        payload,
      }).delay(ANIMATION)
    )
  ))
)
