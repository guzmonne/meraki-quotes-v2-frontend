import UserCreate from './UserCreate/';
import {user} from '../../../../store/schemas.js';
import createCreateContainer from '../HoC/createCreateContainer.js';

const UserCreateContainer = createCreateContainer({
  target: 'users',
  schema: user,
  displayName: 'UserCreateContainer',
})(UserCreate);

export default UserCreateContainer;
