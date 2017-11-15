import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import ControlInput from '../../../../../../common/ControlInput/';
import { Td } from '../../../../../../common/Table/';
import logo from './meraki_logo.png';
import {
  calculateServiceCost,
  calculateAdministrationCost
} from '../../../../../../modules/services.js';
import { IMerakiQuotes } from '../../IMerakiQuotes';

function calculateSupportPrice(merakiQuote, type) {
  const result = type === 'service'
    ? accounting.formatMoney(
      calculateServiceCost(merakiQuote) / (1 - merakiQuote.ServiceMargin)
    )
    : accounting.formatMoney(
      calculateAdministrationCost(merakiQuote)
    )
  return result;
}

const MerakiDeviceRow = ({
  name,
  description,
  merakiQuote,
  type,
}) => (
    <tr>
      <Td header="Nombre & Descripción">
        <div className="MerakiDevice">

          <div className="MerakiDeviceNameAndDescription">

            <h4>{name}</h4>
            <small>{description}</small>

          </div>

        </div>
      </Td>
      <Td> - </Td>
      <Td> - </Td>
      <Td> - </Td>
      <Td> - </Td>
      <Td>
      {accounting.toFixed(
      type === 'service' 
        ? merakiQuote.ServiceMargin * 100
        : merakiQuote.AdminMargin * 100
      , 2)
      }
      </Td>
      <Td> - </Td>
      <Td>
      {calculateSupportPrice(merakiQuote, type)}
      </Td>
    </tr>
  );

MerakiDeviceRow.propTypes = {
  name: T.string,
  description: T.string,
  merakiQuote: T.shape(IMerakiQuotes),
  type: T.oneOf(['service', 'administration'])
};

export default MerakiDeviceRow;
