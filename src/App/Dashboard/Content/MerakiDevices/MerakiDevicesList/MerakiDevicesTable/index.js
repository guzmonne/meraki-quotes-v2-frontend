import React from 'react';
import T from 'prop-types';
import {IMerakiDevice} from '../../IMerakiDevices.js';
import MerakiDeviceRow from './MerakiDeviceRow/';
import Table from '../../../../../../common/Table/';

const MerakiDevicesTable = ({
  merakiDevices,
  displayDestroyModal,
  displayShowModal,
  displayUpdateModal
}) => (
  <Table>
    <thead>
      <tr>
        <th>Número de Parte</th>
        <th>Categoría</th>        
        <th>Descripción</th>
        <th>Creado</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
    {merakiDevices.map((device, i) => 
      <MerakiDeviceRow key={device.ID} {...device} />
    )}
    </tbody>
  </Table>  
);

MerakiDevicesTable.propTypes = {
  merakiDevices: T.arrayOf(T.shape(IMerakiDevice)),
  displayDestroyModal: T.func,
  displayShowModal: T.func,
  displayUpdateModal: T.func,
};

MerakiDevicesTable.defaultProps = {
  merakiDevices: [],
};

export default MerakiDevicesTable;
