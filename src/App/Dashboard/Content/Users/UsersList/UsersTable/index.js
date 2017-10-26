import React from 'react';
import T from 'prop-types';
import {IUser} from '../../IUsers.js';
import UserRow from './UserRow/';
import Table from '../../../../../../common/Table/';

const UsersTable = ({
  items,
  displayDestroyModal,
  displayShowModal,
  displayUpdateModal
}) => (
  <Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Verificado</th>
        <th>Creado</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {items.map((user, i) => 
      <UserRow key={i}
        displayDestroyModal={displayDestroyModal.bind(null, user)}  
        displayShowModal={displayShowModal.bind(null, user)}  
        displayUpdateModal={displayUpdateModal.bind(null, user)}  
        {...user}
      />
    )}
    </tbody>
  </Table>  
);

UsersTable.propTypes = {
  items: T.arrayOf(T.shape(IUser)),
  displayDestroyModal: T.func,
  displayShowModal: T.func,
};

UsersTable.defaultProps = {
  items: [],
};

export default UsersTable;
