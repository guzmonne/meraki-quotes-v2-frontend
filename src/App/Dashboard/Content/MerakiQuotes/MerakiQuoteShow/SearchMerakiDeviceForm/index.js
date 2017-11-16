import './styles.css';
import React from 'react';
import T from 'prop-types';
import accounting from 'accounting';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';
import Button from '../../../../../../common/Button/';
import Table from '../../../../../../common/Table/';

class SearchMerakiDeviceForm extends React.Component {
  state = {
    showingOptions: false,
    searchText: '',
    quantity: 1,
    selectedItem: undefined,
  }

  componentWillMount() {
    this.props.search();
  }

  componentWillUnmount() {
    if (this.timeout)
      window.clearTimeout(this.timeout);
  }

  handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.value.toUpperCase();

    this.setState({searchText});
  }

  handleQty = (e) => (
    this.setState({quantity: e.target.value})
  )

  findSelectedItem = () => {
    const {searchText} = this.state;
    const {items} = this.props;

    return items.find(device => device.PartNumber === searchText);
  }

  isHardware = (device) => device.PartNumber.indexOf('LIC') === -1

  getUTMLicense = (selectedDevice) => {
    const { LicenceYears } = this.props.merakiQuote;
    const { items = [] } = this.props;
    const { PartNumber } = selectedDevice;

    return items.find(device => (
      device.PartNumber === `LIC-${
        PartNumber.replace('-HW', '')
      }-SEC-${
        LicenceYears
      }YR`
    ));
  }
  
  getSwitchesLicense = (selectedDevice) => {
    const { LicenceYears } = this.props.merakiQuote;
    const { items = [] } = this.props;
    const { PartNumber } = selectedDevice;

    return items.find(device => (
      device.PartNumber === `LIC-${
        PartNumber.replace('-HW', '')
      }-${
        LicenceYears
      }YR`
    ));
  }

  getWirelessLicense = (selectedDevice) => {
    const {LicenceYears} = this.props.merakiQuote;
    const {items=[]} = this.props;
    const {PartNumber} = selectedDevice;
    
    return items.find(device => (
      device.PartNumber === `LIC-${
        PartNumber.indexOf('Z1') > -1 ? 'Z1-' : ''
      }ENT-${
        LicenceYears
      }YR`
    ));
  }

  getLicense = (selectedDevice) => {
    const { Category } = selectedDevice;

    switch (Category) {
      case 'Wireless':
        return this.getWirelessLicense(selectedDevice);
      case 'Switches':
        return this.getSwitchesLicense(selectedDevice);
      case 'UTM':
        return this.getUTMLicense(selectedDevice);
      default:
        return undefined;
    }
  }

  handleOnUpdate = (e) => {
    e.preventDefault();

    let selectedItem = Object.assign({}, 
      this.state.selectedItem || this.findSelectedItem()
    );

    if (!selectedItem) return;

    const {Devices=[]} = this.props.merakiQuote;
    const {quantity} = this.state;

    selectedItem.Qty = parseInt(quantity, 10);
    selectedItem.Intro = 0;
    const newDevices = [...Devices, selectedItem];

    if (this.isHardware(selectedItem)) {
      let license = this.getLicense(selectedItem);

      if (license) {
        license = Object.assign({}, license);
        license.Qty = parseInt(quantity, 10);
        license.Intro = 0;
        newDevices.push(license);
      }
    }

    this.props.onUpdate({
      Devices: newDevices,
    });

    this.setState({
      showingOptions: false,
      searchText: '',
      quantity: 1,
      selectedItem: undefined,
    })
  }

  select = (device) => {
    this.setState({
      searchText: device.PartNumber,
      selectedItem: device,
      showingOptions: false,
    });
  }

  showItems = () => this.setState({ showingOptions: true })

  hideItems = () => {
    this.timeout = (
      setTimeout(() => this.setState({ showingOptions: false }), 100)
    );
  }
  
  render() {
    const { searchText, quantity, showingOptions } = this.state;
    const { items } = this.props;

    return (
      <Card className="SearchMerakiDeviceForm">
        
        
        <form onSubmit={this.handleSearch} className="search-form">
          <ControlInput
            value={searchText}
            label="Buscar equipos por modelo"
            type="text"
            onChange={this.handleSearch}
            onBlur={this.hideItems}
            onFocus={this.showItems}
          />
        {showingOptions && searchText.length > 2 && items.length > 0 &&
          <div className="relative">
            <div className="absolute">
              <Table>

                <tbody>
              {
                items
                .filter(device => (
                  device.PartNumber.indexOf(searchText) > -1
                ))
                .length === 0 &&
                <tr colSpan="3">
                  <td>No se han encontrado elementos.</td>
                </tr>
              }
              {
                items
                .filter(device => (
                  device.PartNumber.indexOf(searchText) > -1
                ))
                .reverse()
                .slice(0, 5).map((device) => (
                  <tr onClick={() => this.select(device)} key={device.ID}>
                    <td>{device.PartNumber}</td>
                    <td>{device.Description}</td>
                    <td>{accounting.formatMoney(device.Price)}</td>
                  </tr>
              ))}
                </tbody>

              </Table>
            </div>
          </div>
        }
        </form>   
        <form onSubmit={this.handleOnUpdate} className="add-form">
          
          <ControlInput
            value={quantity}
            label="Cantidad"
            type="number"
            min="0"
            step="1"
            onChange={this.handleQty}
          />
        
          <Button color="green" type="submit">
            Agregar
          </Button>
        
        </form>
      </Card>
    )
  }
}

SearchMerakiDeviceForm.propTypes = {
  search: T.func,
  onUpdate: T.func,
  items: T.array,
};

SearchMerakiDeviceForm.defaultProps = {
  search: () => { },
  onUpdate: () => {},
  items: [],
};

export default SearchMerakiDeviceForm;
