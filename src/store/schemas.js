import {schema} from 'normalizr';

export const user = new schema.Entity('users', {}, {
  idAttribute: ({email}) => (
    btoa(JSON.stringify({email}))
  )
});


export const merakiDevices = new schema.Entity('merakiDevices', {}, {
  idAttribute: ({Category, PartNumber}) => (
    btoa(JSON.stringify({Category, PartNumber}))
  )
});

export const permission = new schema.Entity('permissions', {}, {
  idAttribute: 'permission'
});
