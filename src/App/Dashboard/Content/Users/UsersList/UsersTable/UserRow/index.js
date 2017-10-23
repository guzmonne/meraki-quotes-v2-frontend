import React from 'react';
import T from 'prop-types';
import {IUser} from '../../IUsers.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';
import Action from '../../../../../../../common/Action/';
import TimesSvg from '../../../../../../../common/Icons/TimesSvg.js';

const UserRow = ({
  createdAt,
  updatedAt,
  username,
  email,
  verified,
  displayDestroyModal,
  displayShowModal,
}) => (
  <tr>
    <Td header="Usuario">
      <a onClick={displayShowModal}>{username}</a>
    </Td>
    <Td header="Email">{email}</Td>
    <Td header="Verificado">{verified === true ? 'Si' : 'No'}</Td>
    <Td header="Creado">
      <DateFromNow>{createdAt}</DateFromNow>
    </Td>
    <Td header="Actualizado">
      <DateFromNow>{updatedAt}</DateFromNow>
    </Td>
    <Td>
      <Action onClick={displayDestroyModal}>
        <TimesSvg fill="red"/>
      </Action>
    </Td>
  </tr>
);

UserRow.propTypes = Object.assign({}, IUser, {
  displayDestroyModal: T.func,
  displayShowModal: T.func,
})

export default UserRow;
