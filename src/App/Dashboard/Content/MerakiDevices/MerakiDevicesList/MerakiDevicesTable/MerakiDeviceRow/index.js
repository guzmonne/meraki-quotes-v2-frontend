import './styles.css';
import React from 'react';
import {IMerakiDevice} from '../../../IMerakiDevices.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';
import Money from '../../../../../../../common/Money/';

const MerakiDeviceRow = ({
  Category,
  createdAt,
  Description,
  PartNumber,
  Price,
  ImageUrl,
  displayShowModal
}) => (
  <tr className="MerakiDeviceRow">
    <Td header="Número de Parte">
      <a onClick={displayShowModal}>{PartNumber}</a>
    </Td>
    <Td header="Categoría">{Category}</Td>    
    <Td header="Descripción">{Description}</Td>
    <Td header="Creado"><DateFromNow>{createdAt}</DateFromNow></Td>
    <Td header="Price"><Money>{Price}</Money></Td>
  </tr>
);

MerakiDeviceRow.propTypes = Object.assign({}, IMerakiDevice)

export default MerakiDeviceRow;
