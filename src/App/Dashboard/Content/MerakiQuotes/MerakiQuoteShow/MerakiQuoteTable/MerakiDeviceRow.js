import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import ControlInput from '../../../../../../common/ControlInput/';
import { Td } from '../../../../../../common/Table/';

const salesPrice = (price=0, discount=0, intro=0, margin=0) => (
  price * (1 - discount) * (1 + intro) / (1 - margin)
);

const MerakiDeviceRow = ({
  ImageUrl,
  PartNumber,
  Description,
  Price,
  Discount,
  Intro,
  Margin,
  Qty,
}) => (
  <tr>
    <Td header="Nombre & Descripción">
      <div className="MerakiDevice">

      {PartNumber.indexOf('LIC') === -1 && 
        <img src={ImageUrl} alt={PartNumber} />
      }
        <div className="MerakiDeviceNameAndDescription">

          <h4>{PartNumber}</h4>
          <small>{Description}</small>

        </div>

      </div>
    </Td>
    <Td>
      {accounting.formatMoney(Price)}
    </Td>
    <Td>
      <ControlInput
        type="text"
        value={Qty}
        onChange={() => {}}
      />
    </Td>
    <Td>
      {accounting.toFixed(Discount * 100, 2)}
    </Td>
    <Td>
  {PartNumber.indexOf('LIC') > -1
    ? '-'
    : <ControlInput
        type="text"
        value={accounting.toFixed(Intro * 100, 2)}
        onChange={() => { }}
      />
  }
    </Td>
    <Td>
      {accounting.toFixed(Margin * 100, 2)}
    </Td>
    <Td>
      {accounting.formatMoney(
        salesPrice(Price, Discount, Intro, Margin)
      )}
    </Td>
    <Td>
      {accounting.formatMoney(
        salesPrice(Price, Discount, Intro, Margin) * Qty
      )}
    </Td>
  </tr>
);

MerakiDeviceRow.propTypes = {
  ImageUrl: T.string,
  PartNumber: T.string,
  Description: T.string,
  Price: T.number,
  Discount: T.number,
  Intro: T.number,
  Margin: T.number,
  Qty: T.number,
};

export default MerakiDeviceRow;
