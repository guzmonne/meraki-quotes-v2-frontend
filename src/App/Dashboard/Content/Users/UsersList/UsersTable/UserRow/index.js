import './styles.css';
import React from 'react';
import T from 'prop-types';
import {IUser} from '../../../IUsers.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';
import Action from '../../../../../../../common/Action/';
import TimesSvg from '../../../../../../../common/Icons/TimesSvg.js';
import PencilSvg from '../../../../../../../common/Icons/PencilSvg.js';

const UserRow = ({
  createdAt,
  updatedAt,
  username,
  email,
  verified,
  displayDestroyModal,
  displayShowModal,
  displayUpdateModal,
}) => (
  <tr className="UserRow">
    <Td header="Usuario">
      <a onClick={displayShowModal}>{username}</a>
    </Td>
    <Td header="Email">{email}</Td>
    <Td header="Verificado">{verified === true ? 'Si' : 'No'}</Td>
    <Td header="Creado">
      <DateFromNow>{createdAt}</DateFromNow>
    </Td>
    <Td>
      <Action onClick={displayUpdateModal}>
        <PencilSvg fill="orange"/>
      </Action>
      <Action onClick={displayDestroyModal}>
        <TimesSvg fill="red"/>
      </Action>
    </Td>
  </tr>
);

UserRow.propTypes = Object.assign({}, IUser, {
  displayDestroyModal: T.func,
  displayShowModal: T.func,
  displayUpdateModal: T.func,
})

export default UserRow;
