import './styles.css';
import UserForm from '../UserForm/';
import {IUser, empty} from '../IUsers.js';
import createCreateComponent from '../../HoC/createCreateComponent.js';

const UserCreate = createCreateComponent({
  empty,
  displayName: 'UserCreate',
  title: 'Crear Nuevo Quote',
  itemType: IUser,
})(UserForm);

export default UserCreate;
