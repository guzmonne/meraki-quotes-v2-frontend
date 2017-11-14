import React from 'react';

const Thead = () => (
  <thead>
    <tr>
      <th>
        Nombre
        <br />
        <small>Descripción</small>
      </th>
      <th>
        Precio de Lista
        <br />
        <small>(USD)</small>
      </th>
      <th style={{width: '80px'}}>
        Cant.
        <br />
        <small>(uni.)</small>
      </th>
      <th style={{ width: '60px' }}>
        Desc.
        <br />
        <small>(%)</small>
      </th>
      <th style={{ width: '80px' }}>
        Intro.
        <br />
        <small>(%)</small>
      </th>
      <th style={{ width: '80px' }}>
        Margen
        <br />
        <small>(%)</small>
      </th>
      <th>
        Precio de Venta
        <br />
        <small>(USD)</small>
      </th>
      <th>
        Sub-Total
        <br />
        <small>(USD)</small>
      </th>
    </tr>
  </thead>
);

export default Thead;
