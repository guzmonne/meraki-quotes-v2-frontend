import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';
import {IMerakiQuotes} from '../../IMerakiQuotes.js';

class MerakiQuoteShowGlobalOptions extends React.Component {
  handleChange = (label) => (e) => {
    this.props.onUpdate({
      [label]: e.target.value,
    });
  }

  render() {
    const {LicenceYears, DealApproved, Discount} = this.props;

    return (
      <Card className="MerakiQuoteShowGlobalOptions">
        <ControlInput
          value={LicenceYears || 1}
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
          value={Discount}
          label="Descuento"
          type="number"
          min="0.00"
          max="1.00"
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
