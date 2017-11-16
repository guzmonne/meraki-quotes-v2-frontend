import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {IMerakiQuotes} from '../../../IMerakiQuotes.js';
import DateFromNow from '../../../../../../../common/DateFromNow/';
import {Td} from '../../../../../../../common/Table/';

const MAX_LENGTH = 50;

const MerakiQuoteRow = ({
  ID,
  Name,
  Description,
  createdAt,
  UserID,
}) => {
  const key = btoa(JSON.stringify({ UserID, createdAt }));
  const id = key.slice(key.length - 10, key.length - 2);

  return (
    <tr className="MerakiQuoteRow">
      <Td header="ID">
        <Link to={`/merakiQuotes/${key}`}>
          {id}
        </Link>
      </Td>
      <Td header="Nombre">
        {Name.slice(0, MAX_LENGTH)}
        {Name.length >= MAX_LENGTH && '...'}
      </Td>
      <Td header="Descripción">
        {(Description || '').slice(0, MAX_LENGTH)}
        {(Description || '').length >= MAX_LENGTH && '...'}
      </Td>
      <Td header="Creado"><DateFromNow>{createdAt}</DateFromNow></Td>
    </tr>
  );
};

MerakiQuoteRow.propTypes = IMerakiQuotes;

export default MerakiQuoteRow;
