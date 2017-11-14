import './styles.css';
import React from 'react';
import DateFromNow from '../../../../../../common/DateFromNow/';
import Card from '../../../Card/';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

const MerakiQuoteShowHeader = ({
  Name,
  Description,
  UserName,
  createdAt,
  updatedAt
}) => (
  <Card className="MerakiQuoteShowHeader">
    <h2>{Name}</h2>
    <h3>{Description}</h3>

    <div className="MerakiQuoteShowHeader__body">

      <div className="MerakiQuoteShowHeader__createdBy">
        <dt>Creado Por</dt>
        <dd>{UserName}</dd>
      </div>

      <div className="MerakiQuoteShowHeader__createdAt">
        <dt>Creado</dt>
        <dd><DateFromNow>{createdAt}</DateFromNow></dd>
      </div>

      <div className="MerakiQuoteShowHeader__updatedAt">
        <dt>Actualizado</dt>
        <dd><DateFromNow>{updatedAt}</DateFromNow></dd>
      </div>

    </div>
  </Card>
);

MerakiQuoteShowHeader.propTypes = IMerakiQuotes

MerakiQuoteShowHeader.defaultProps =  {
  Name: 'Meraki Quote de prueba',
  Description: 'Descripción de Meraki Quote de Prueba',
  UserName: 'Guzmán Monné'
};

export default MerakiQuoteShowHeader;
