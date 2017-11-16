import React from 'react';
import T from 'prop-types';
import moment from 'moment';
import Spinner from '../../../../../common/Spinner/';

class MerakiQuoteCreate extends React.Component {
  componentWillMount() {
    this.props.create({
      Name: `Cotización de Meraki ${moment().format('DD/MM/YYYY hh:ss')}`,
      Devices: [],
      AdminMargin: 0.3,
      ServiceMargin: 0.3,
      HardwareMargin: 0.2,
      SoftwareMargin: 0.2,
      LicenceYears: 3,
      Discount: 0.35,
      ServiceLevel: '9x5xNBD',
      DealApproved: false,
    });
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.creating === false && 
      this.props.creating === true &&
      newProps.id
    )
      this.props.history.push(`/merakiQuotes/${newProps.id}`);
  }

  render() {
    return (
      <Spinner color="black" size="xl" />
    );
  }
}

MerakiQuoteCreate.propTypes = {
  create: T.func.isRequired,
  creating: T.bool,
  id: T.string,
};

export default MerakiQuoteCreate
