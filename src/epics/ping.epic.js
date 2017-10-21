import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

const PING = 'PING';
const PONG = 'PONG';

const pingEpic = action$ => (
  action$
  .do(x => console.log(x))
  .ofType(PING)
  .mapTo({type: PONG})
);

export default pingEpic;
