import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiDeviceForm from '../MerakiDeviceForm/';
import {IMerakiDevice, empty} from '../IMerakiDevices.js';
import removeEmpty from '../../../../../modules/removeEmpty.js';

class MerakiDeviceCreate extends React.Component {
  componentWillMount() {
    this.props.setForm(empty());
  }

  render() {
    const {item, error, create, creating} = this.props

    return (
      <Card className="MerakiDeviceCreate">
        <h1>Crear Nuevo Usuario</h1>
        <MerakiDeviceForm 
          merakiDevice={item}
          onSubmit={(body) => create(removeEmpty(body), empty())}
          error={error}
          loading={creating}
        />
      </Card>
    )
  }
}

MerakiDeviceCreate.propTypes = {
  item: T.shape(IMerakiDevice),
  error: T.object,
  create: T.func,
  creating: T.bool,
  setForm: T.func.isRequired,
};

export default MerakiDeviceCreate;
