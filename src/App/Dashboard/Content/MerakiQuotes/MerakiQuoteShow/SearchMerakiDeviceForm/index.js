import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../../Card/';
import ControlInput from '../../../../../../common/ControlInput/';
import Button from '../../../../../../common/Button/';

class SearchMerakiDeviceForm extends React.Component {
  state = {
    searchText: '',
    quantity: 1,
    selectedItem: undefined,
  }

  handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.value;

    this.setState({searchText});

    if (searchText !== '' && searchText.length >= 2) 
      this.props.search(searchText);
  }

  handleQty = (e) => (
    this.setState({quantity: e.target.value})
  )

  handleAdd = (e) => {
    e.preventDefault();

    if (this.state.selectedItem)
      this.props.add({
        ...this.state.selectedItem,
        Qty: this.state.quantity,
      });
  }
  
  render() {
    const {searchText, quantity, selectedItem} = this.state; 

    return (
      <Card className="SearchMerakiDeviceForm">
        <form onSubmit={this.handleSearch} className="search-form">

          <ControlInput
            value={searchText}
            label="Buscar equipos por modelo o descripción"
            type="text"
            onChange={this.handleSearch}
          />

          
        </form>   
          
        <form onSubmit={this.handleAdd} className="add-form">
          
          <ControlInput
            value={quantity}
            label="Cantidad"
            type="number"
            onChange={this.handleQty}
          />
        
          <Button color="green" type="submit" disabled={!!selectedItem}>
            Agregar
          </Button>
        
        </form>
      </Card>
    )
  }
}

SearchMerakiDeviceForm.propTypes = {
  search: T.func,
  add: T.func,
  items: T.array,
};

SearchMerakiDeviceForm.defaultProps = {
  search: () => {},
  add: () => {},
  items: [],
};

export default SearchMerakiDeviceForm;
