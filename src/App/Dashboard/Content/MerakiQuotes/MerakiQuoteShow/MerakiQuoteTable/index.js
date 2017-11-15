import './styles.css';
import React from 'react';
import T from 'prop-types';
import findIndex from 'lodash/findIndex.js';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';
import Card from '../../../Card/';
import Table from '../../../../../../common/Table/';
import Thead from './Thead.js';
import MerakiDeviceRow from './MerakiDeviceRow.js';

class MerakiQuoteTable extends React.Component {
  handleOnUpdate = (device) => {
    let devices = this.props.merakiQuote.Devices;

    const index = findIndex(devices, ({ID}) => ID === device.ID);

    this.props.onUpdate({
      Devices: [
        ...devices.slice(0, index),
        device,
        ...devices.slice(index + 1, devices.length)
      ],
    });
  }

  render() {
    const { merakiQuote } = this.props;
    
    return (
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
                .map((device, index) => (
                  <MerakiDeviceRow
                    key={device.ID}
                    onUpdate={this.handleOnUpdate}
                    Discount={merakiQuote.Discount}
                    Margin={merakiQuote.HardwareMargin}
                    device={device}
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
                    onUpdate={this.handleOnUpdate}
                    device={device}
                  />
                ))
            }
          </tbody>
        </Table>
      </Card>
    );
  }
}

MerakiQuoteTable.propTypes = {
  merakiQuote: T.shape(IMerakiQuotes),
  onUpdate: T.func,
}

export default MerakiQuoteTable;
