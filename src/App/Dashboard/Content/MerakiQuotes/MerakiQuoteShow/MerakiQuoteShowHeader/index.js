import './styles.css';
import React from 'react';
import T from 'prop-types';
import DateFromNow from '../../../../../../common/DateFromNow/';
import Card from '../../../Card/';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

const MerakiQuoteShowHeader = ({
  Name,
  Description,
  UserName,
  createdAt,
  updatedAt,
  openModal,
}) => (
  <Card className="MerakiQuoteShowHeader">
    <h2>
      <a onClick={openModal}>{Name}</a>  
    </h2>
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

MerakiQuoteShowHeader.propTypes = Object.assign({}, IMerakiQuotes, {
  openModal: T.func,
});

MerakiQuoteShowHeader.defaultProps =  {
  Name: 'Meraki Quote de prueba',
  Description: '',
  UserName: 'Guzmán Monné'
};

export default MerakiQuoteShowHeader;
