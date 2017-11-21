import { Observable } from 'rxjs/Observable'
import {
  MERAKI_QUOTE_AUTO_UPDATE,
  API_UPDATE,
} from '../store/actions';

export default action$ => (
  action$
    .ofType(MERAKI_QUOTE_AUTO_UPDATE)
    .switchMap(({payload}) => {
      const timeout$ = Observable.of({
        type: API_UPDATE,
        payload,
      })
      .delay(5000);

      const update$ = Observable.of({
        type: 'MERAKIQUOTES_API_UPDATE_REQUEST',
        payload,
      })

      return Observable.concat(update$, timeout$);
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
