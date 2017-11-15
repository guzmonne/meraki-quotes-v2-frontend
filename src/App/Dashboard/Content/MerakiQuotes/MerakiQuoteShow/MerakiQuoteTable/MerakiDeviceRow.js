import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import ControlInput from '../../../../../../common/ControlInput/';
import { Td } from '../../../../../../common/Table/';
import logo from './meraki_logo.png';

const salesPrice = (price=0, discount=0, intro=0, margin=0) => (
  price * (1 - discount) * (1 + intro) / (1 - margin)
);

const MerakiDeviceRow = ({
  Discount,
  Margin,
  device,
  onUpdate,
}) => (
  <tr>
    <Td header="Nombre & Descripción">
      <div className="MerakiDevice">

        <img src={device.ImageUrl || logo} alt={device.PartNumber} />

        <div className="MerakiDeviceNameAndDescription">

          <h4>{device.PartNumber}</h4>
          <small>{device.Description}</small>

        </div>

      </div>
    </Td>
    <Td>
      {accounting.formatMoney(device.Price)}
    </Td>
    <Td>
      <ControlInput
        type="number"
        min="0"
        step="1"
        value={device.Qty}
        onChange={(e) => {
          onUpdate({
            ...device,
            Qty: parseInt(e.target.value, 10),
          });
        }}
      />
    </Td>
    <Td>
      {accounting.toFixed(Discount * 100, 2)}
    </Td>
    <Td>
  {device.PartNumber.indexOf('LIC') > -1
    ? '-'
    : <ControlInput
        type="number"
        min="0"
        max="100"
        step="0.01"
        value={accounting.toFixed(device.Intro * 100, 2)}
        onChange={(e) => {
          this.props.onUpdate({
            ...device,
            Intro: parseFloat(e.target.value, 10) / 100,
          });
        }}
      />
  }
    </Td>
    <Td>
      {accounting.toFixed(Margin * 100, 2)}
    </Td>
    <Td>
      {accounting.formatMoney(
        salesPrice(device.Price, Discount, device.Intro, Margin)
      )}
    </Td>
    <Td>
      {accounting.formatMoney(
        salesPrice(device.Price, Discount, device.Intro, Margin) * device.Qty
      )}
    </Td>
  </tr>
);

MerakiDeviceRow.propTypes = {
  device: T.shape({
    ImageUrl: T.string,
    PartNumber: T.string,
    Description: T.string,
    Price: T.number,
    Intro: T.number,
    Qty: T.number,
  }),
  Discount: T.number,
  Margin: T.number,
  onUpdate: T.func,
};

export default MerakiDeviceRow;
