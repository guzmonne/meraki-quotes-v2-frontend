import './styles.css';
import React from 'react';
import {IMerakiQuotes} from '../../../IMerakiQuotes.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';

const MerakiQuoteRow = ({
  ID,
  Name,
  Description,
  createdAt,
}) => (
  <tr className="MerakiQuoteRow">
    <Td header="ID">
      <a>{ID.slice(0, 8)}</a>
    </Td>
    <Td header="Nombre">{Name}</Td>    
    <Td header="Descripción">{Description.slice(0, 100)}</Td>
    <Td header="Creado"><DateFromNow>{createdAt}</DateFromNow></Td>
  </tr>
);

MerakiQuoteRow.propTypes = IMerakiQuotes;

export default MerakiQuoteRow;
