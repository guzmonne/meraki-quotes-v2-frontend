import './styles.css';
import React from 'react';
import T from 'prop-types';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';
import Card from '../../../Card/';
import Table from '../../../../../../common/Table/';
import Thead from './Thead.js';
import MerakiDeviceRow from './MerakiDeviceRow.js';

const MerakiQuoteTable = ({merakiQuote}) => (
  <Card className="MerakiQuoteTable">
    <Table hover={false}>
      <Thead />
      <tbody>
        <tr><td colSpan="8" className="rows-title">Hardware</td></tr>
    {
      merakiQuote &&
      merakiQuote.Devices && 
      merakiQuote.Devices.filter(device => (
        device.PartNumber.indexOf('LIC') === -1
      ))
      .map(device => (
        <MerakiDeviceRow 
          key={device.ID} 
          Discount={merakiQuote.Discount}
          Margin={merakiQuote.HardwareMargin}
          {...device}
        />
      ))
    }
        <tr><td colSpan="8" className="rows-title">Software</td></tr>
    {
      merakiQuote &&
      merakiQuote.Devices &&
      merakiQuote.Devices.filter(device => (
        device.PartNumber.indexOf('LIC') > -1
      ))
        .map(device => (
          <MerakiDeviceRow
            key={device.ID}
            Discount={merakiQuote.Discount}
            Margin={merakiQuote.SoftwareMargin}
            {...device}
          />
        ))
    }
      </tbody>
    </Table>
  </Card>
);

MerakiQuoteTable.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
  onUpdate: T.func,
}

export default MerakiQuoteTable;
