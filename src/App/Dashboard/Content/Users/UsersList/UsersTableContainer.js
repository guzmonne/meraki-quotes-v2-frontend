import UsersTable from './UsersTable/';
import createTableContainer from '../../HoC/createTableContainer.js';

const UsersTableContainer = createTableContainer({
  target: 'users',
  encodeKey: ({email}) => (
    btoa(JSON.stringify({email}))
  ),
  displayName: 'UsersTable',
})(UsersTable)

export default UsersTableContainer;
