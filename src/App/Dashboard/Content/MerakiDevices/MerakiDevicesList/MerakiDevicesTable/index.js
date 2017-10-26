import React from 'react';
import T from 'prop-types';
import {IMerakiDevice} from '../../IMerakiDevices.js';
import MerakiDeviceRow from './MerakiDeviceRow/';
import Table from '../../../../../../common/Table/';

const MerakiDevicesTable = ({
  items,
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
        <th></th>
      </tr>
    </thead>
    <tbody>
    {items.map((device, i) => 
      <MerakiDeviceRow key={device.ID} 
        displayShowModal={displayShowModal.bind(null, device)} 
        displayUpdateModal={displayUpdateModal.bind(null, device)} 
        displayDestroyModal={displayDestroyModal.bind(null, device)} 
        {...device} 
      />
    )}
    </tbody>
  </Table>  
);

MerakiDevicesTable.propTypes = {
  items: T.arrayOf(T.shape(IMerakiDevice)),
  displayDestroyModal: T.func,
  displayShowModal: T.func,
  displayUpdateModal: T.func,
};

MerakiDevicesTable.defaultProps = {
  items: [],
};

export default MerakiDevicesTable;
