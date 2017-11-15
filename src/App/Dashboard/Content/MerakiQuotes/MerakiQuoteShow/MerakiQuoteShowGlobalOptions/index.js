import './styles.css';
import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

class MerakiQuoteShowGlobalOptions extends React.Component {
  handleChange = (label) => (e) => {
    const value = label === 'Discount' 
      ? parseFloat(e.target.value, 10) / 100 
      : e.target.value;
    this.props.onUpdate({
      [label]: value,
    });
  }

  render() {
    const {LicenceYears, DealApproved, Discount} = this.props;

    return (
      <Card className="MerakiQuoteShowGlobalOptions">
        <ControlInput
          value={LicenceYears}
          label="Años"
          type="number"
          onChange={this.handleChange('LicenceYears')}
        />
        <ControlInput
          value={DealApproved}
          label="Deal"
          type="checkbox"
          onChange={this.handleChange('DealApproved')}
        />
        <ControlInput
          value={parseFloat(accounting.toFixed(Discount * 100, 2), 10)}
          label="Descuento"
          type="number"
          min="0.00"
          max="100.00"
          step="0.01"
          onChange={this.handleChange('Discount')}
        />
      </Card>
    )
  }
}

MerakiQuoteShowGlobalOptions.propTypes = Object.assign({}, IMerakiQuotes, {
  onUpdate: T.func.isRequired,
});

MerakiQuoteShowGlobalOptions.defaultProps =  {
  Name: 'Meraki Quote de prueba',
  Description: 'Descripción de Meraki Quote de Prueba',
  UserName: 'Guzmán Monné'
};

export default MerakiQuoteShowGlobalOptions;
