import './styles.css';
import React from 'react';
import T from 'prop-types';
import findIndex from 'lodash/findIndex.js';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';
import Card from '../../../Card/';
import Table from '../../../../../../common/Table/';
import Thead from './Thead.js';
import MerakiDeviceRow from './MerakiDeviceRow.js';
import SupportRow from './SupportRow.js'
import FinancingRow from './FinancingRow.js'

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
            <tr><td colSpan="8" className="rows-title">
              Administración, Soporte y Financiación
            </td></tr>
            <SupportRow 
              name="Soporte"
              description="Cuota mensual de soporte de equipos."
              type="service"
              merakiQuote={merakiQuote}
            />
            <SupportRow
              name="Administración"
              description="Cuota mensual para la administración del equipamiento."
              type="administration"
              merakiQuote={merakiQuote}
            />
            <FinancingRow
              name="Financiación de Licencias"
              description="Cuota mensual bajo contrato a 36 meses."
              type="software"
              merakiQuote={merakiQuote}
            />
            <FinancingRow
              name="Financiación de Equipos"
              description="Cuota mensual bajo contrato a 36 meses."
              type="hardware"
              merakiQuote={merakiQuote}
            />
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
