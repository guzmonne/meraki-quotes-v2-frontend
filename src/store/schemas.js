import {schema} from 'normalizr';

export const user = new schema.Entity('users', {}, {
  idAttribute: ({email}) => (
    btoa(JSON.stringify({email}))
  )
});
