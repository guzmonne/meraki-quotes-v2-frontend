import {IUser} from '../../IUsers.js';
import UserRow from './UserRow/';
import createTableComponent from '../../../HoC/createTableComponent.js';

const UsersTable = createTableComponent({
  headers: [
    'Nombre',
    'Email',        
    'Verificado',
    'Creado',
    '',
  ],
  rowId: 'ID',
  schema: IUser,
  displayName: 'UsersTable',
})(UserRow);

export default UsersTable;
