import React from 'react';
import T from 'prop-types';
import {IUser} from '../IUsers.js';
import UserRow from './UserRow/';
import Table from '../../../../../../common/Table/';

const UsersTable = ({users}) => (
  <Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Verificado</th>
        <th>Creado</th>
        <th>Actualizado</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user => 
      <UserRow key={user.ID} {...user} />
    )}
    </tbody>
  </Table>  
);

UsersTable.propTypes = {
  users: T.arrayOf(T.shape(IUser)),  
};

UsersTable.defaultProps = {
  users: [],
};

export default UsersTable;
