import './styles.css';
import React from 'react';
import T from 'prop-types';
import {IMerakiDevice} from '../../../IMerakiDevices.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';
import Money from '../../../../../../../common/Money/';
import Action from '../../../../../../../common/Action/';
import TimesSvg from '../../../../../../../common/Icons/TimesSvg.js';
import PencilSvg from '../../../../../../../common/Icons/PencilSvg.js';

const MerakiDeviceRow = ({
  Category,
  createdAt,
  Description,
  PartNumber,
  Price,
  ImageUrl,
  displayShowModal,
  displayUpdateModal,
  displayDestroyModal,
}) => (
  <tr className="MerakiDeviceRow">
    <Td header="Número de Parte">
      <a onClick={displayShowModal}>{PartNumber}</a>
    </Td>
    <Td header="Categoría">{Category}</Td>    
    <Td header="Descripción">{Description}</Td>
    <Td header="Creado"><DateFromNow>{createdAt}</DateFromNow></Td>
    <Td header="Price"><Money>{Price}</Money></Td>
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

MerakiDeviceRow.propTypes = Object.assign({}, IMerakiDevice, {
  displayShowModal: T.func,
  displayUpdateModal: T.func,
  displayDestroyModal: T.func,
})

export default MerakiDeviceRow;
