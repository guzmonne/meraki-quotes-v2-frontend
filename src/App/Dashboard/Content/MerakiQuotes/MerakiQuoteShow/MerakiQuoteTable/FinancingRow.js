import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import ControlInput from '../../../../../../common/ControlInput/';
import { Td } from '../../../../../../common/Table/';
import logo from './meraki_logo.png';
import {
  calculateHardwareMonthlyPrice,
  calculateLicenseMonthlyPrice
} from '../../../../../../modules/services.js';
import { IMerakiQuotes } from '../../IMerakiQuotes';

function calculateFinancingPrice(merakiQuote, type) {
  const result = type === 'hardware'
    ? accounting.formatMoney(
      calculateHardwareMonthlyPrice(merakiQuote)
    )
    : accounting.formatMoney(
      calculateLicenseMonthlyPrice(merakiQuote)
    );
  return result;
}

const FinancingRow = ({
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
      <Td>{accounting.toFixed(merakiQuote.Discount * 100, 2)}</Td>
      <Td> - </Td>
      <Td>
        {accounting.toFixed(
          type === 'hardware'
            ? merakiQuote.HardwareMargin * 100
            : merakiQuote.SoftwareMargin * 100
          , 2)
        }
      </Td>
      <Td> - </Td>
      <Td>
        {calculateFinancingPrice(merakiQuote, type)}
      </Td>
    </tr>
  );

FinancingRow.propTypes = {
  name: T.string,
  description: T.string,
  merakiQuote: T.shape(IMerakiQuotes),
  type: T.oneOf(['software', 'hardware'])
};

export default FinancingRow;
