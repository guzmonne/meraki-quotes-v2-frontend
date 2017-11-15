import './styles.css';
import React from 'react';
import accounting from 'accounting';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';

class MerakiQuoteGlobalVariables extends React.Component {
  handleChange = (label) => (e) => {
    const value = label !== 'ServiceLevel'
      ? parseFloat(e.target.value, 10) / 100
      : e.target.value;
    this.props.onUpdate({
      [label]: value,
    });
  }
  
  render() {
    const {
      ServiceLevel,
      HardwareMargin,
      SoftwareMargin,
      ServiceMargin,
      AdminMargin,
    } = this.props;

    return (
      <Card className="MerakiQuoteGlobalVariables">
        <ControlInput
          value={ServiceLevel}
          label="Tipo de Servicio"
          type="select"
          options={['9x5xNBD', '24x7x4']}
          onChange={this.handleChange('ServiceLevel')}
        />
        <ControlInput
          value={accounting.toFixed(HardwareMargin * 100, 2)}
          label="Margen de Hardware"
          type="number"
          onChange={this.handleChange('HardwareMargin')}
        />
        <ControlInput
          value={accounting.toFixed(SoftwareMargin * 100, 2)}
          label="Margen de Software"
          type="number"
          onChange={this.handleChange('SoftwareMargin')}
        />
        <ControlInput
          value={accounting.toFixed(ServiceMargin * 100, 2)}
          label="Margen de Servicio"
          type="number"
          onChange={this.handleChange('ServiceMargin')}
          disabled={true}
        />
        <ControlInput
          value={accounting.toFixed(AdminMargin * 100, 2)}
          label="Margen de Administración"
          type="number"
          onChange={this.handleChange('AdminMargin')}
          disabled={true}
        />
      </Card>
    );
  }
}

export default MerakiQuoteGlobalVariables;
