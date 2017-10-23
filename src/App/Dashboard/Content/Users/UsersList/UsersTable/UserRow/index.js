import React from 'react';
import T from 'prop-types';
import {IUser} from '../../IUsers.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';

const UserRow = ({
  createdAt,
  updatedAt,
  username,
  email,
  verified
}) => (
  <tr>
    <Td header="Usuario">{username}</Td>
    <Td header="Email">{email}</Td>
    <Td header="Verificado">{verified === true ? 'Si' : 'No'}</Td>
    <Td header="Creado">
      <DateFromNow>{createdAt}</DateFromNow>
    </Td>
    <Td header="Actualizado">
      <DateFromNow>{updatedAt}</DateFromNow>
    </Td>
  </tr>
);

UserRow.propTypes = IUser;

export default UserRow;
