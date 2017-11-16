import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get.js';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';
import Card from '../../../Card/';
import Table from '../../../../../../common/Table/';
import Thead from './Thead.js';
import MerakiDeviceRow from './MerakiDeviceRow.js';
import SupportRow from './SupportRow.js'
import FinancingRow from './FinancingRow.js'
import { isLicense } from '../../../../../../modules/services';

const isHardware = device => (
  device.PartNumber.indexOf('LIC') === -1
);

const isLicence = device => (
  device.PartNumber.indexOf('LIC') !== -1
);

class MerakiQuoteTable extends React.Component {
  handleOnUpdate = (index) => (device) => {
    let devices = get(this.props, 'merakiQuote.Devices', []);

    this.props.onUpdate({
      Devices: [
        ...devices.slice(0, index),
        device,
        ...devices.slice(index + 1, devices.length)
      ],
    });
  }

  handleOnDelete = (index) => () => {
    let devices = get(this.props, 'merakiQuote.Devices', []);

    console.log(index, [
      ...devices.slice(0, index),
      ...devices.slice(index + 1, devices.length)
    ]);

    this.props.onUpdate({
      Devices: [
        ...devices.slice(0, index),
        ...devices.slice(index + 1, devices.length)
      ],
    });
  }

  render() {
    const { merakiQuote } = this.props;
    const { Devices = [] } = merakiQuote;

    const items = Devices.reduce((acc, device, index) => {
      if (isLicence(device))
        acc.software.push({index, device});
      else
        acc.hardware.push({index, device});

      return acc;
    }, {hardware: [], software: []});

    console.log(items);

    return (
      <Card className="MerakiQuoteTable">
        <Table hover={false}>
          <Thead />
          <tbody>
            <tr><td colSpan="8" className="rows-title">Hardware</td></tr>
          {(!merakiQuote.Devices || 
            merakiQuote.Devices.filter(isHardware).length === 0) &&
            <tr><td colSpan="8">
              No se han cargado equipos a esta cotización.
            </td></tr>
          }
          {items.hardware.map(({ index, device}) => (
            <MerakiDeviceRow
              key={index + device.ID}
              device={device}
              onUpdate={this.handleOnUpdate(index)}
              onDelete={this.handleOnDelete(index)}
              Discount={merakiQuote.Discount}
              Margin={merakiQuote.HardwareMargin}
            />
          ))}
            <tr><td colSpan="8" className="rows-title">Software</td></tr>
          {(!merakiQuote.Devices ||
            merakiQuote.Devices.filter(isLicense).length === 0) &&
            <tr><td colSpan="8">
              No se han cargado licencias a esta cotización.
            </td></tr>
          }
            {items.software.map(({ index, device }) => (
              <MerakiDeviceRow
                key={index}
                device={device}
                Discount={merakiQuote.Discount}
                Margin={merakiQuote.SoftwareMargin}
                onUpdate={this.handleOnUpdate(index)}
                onDelete={this.handleOnDelete(index)}
              />
            ))}
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
