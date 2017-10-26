import UsersList from './UsersList/';
import {user} from '../../../../store/schemas.js';
import createListContainer from '../Pages/createListContainer.js';

const UsersListContainer = createListContainer({
  target: 'users',
  fetchingFlag: 'usersApiIndex',
  schema: user,
  displayName:'UsersListContainer'
})(UsersList);

export default UsersListContainer;
