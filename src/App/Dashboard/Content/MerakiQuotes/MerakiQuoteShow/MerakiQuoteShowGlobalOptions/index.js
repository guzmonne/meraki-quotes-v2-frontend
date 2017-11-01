import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

const MerakiQuoteShowGlobalOptions = ({
  Name,
  Description,
  UserName,
  createdAt,
  updatedAt
}) => (
  <Card className="MerakiQuoteShowGlobalOptions">
    <ControlInput
      value={3}
      label="Años"
      type="number"
    />
    <ControlInput
      value={3}
      label="Deal"
      type="checkbox"
    />
    <ControlInput
      value={0.35}
      label="Descuento"
      type="number"
      min="0.00"
      max="1.00"
      step="0.01"
    />
  </Card>
);

MerakiQuoteShowGlobalOptions.propTypes = IMerakiQuotes

MerakiQuoteShowGlobalOptions.defaultProps =  {
  Name: 'Meraki Quote de prueba',
  Description: 'Descripción de Meraki Quote de Prueba',
  UserName: 'Guzmán Monné'
};

export default MerakiQuoteShowGlobalOptions;
