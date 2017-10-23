import React from 'react';
import T from 'prop-types';
import {IUser} from '../IUsers.js';
import UserRow from './UserRow/';
import Table from '../../../../../../common/Table/';

const UsersTable = ({users, displayDestroyModal}) => (
  <Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Verificado</th>
        <th>Creado</th>
        <th>Actualizado</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {users.map(user => 
      <UserRow key={user.ID}
        displayDestroyModal={displayDestroyModal.bind(null, user)}  
        {...user}
      />
    )}
    </tbody>
  </Table>  
);

UsersTable.propTypes = {
  users: T.arrayOf(T.shape(IUser)),
  displayDestroyModal: T.func,
};

UsersTable.defaultProps = {
  users: [],
};

export default UsersTable;
