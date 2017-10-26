import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiDeviceForm from '../MerakiDeviceForm/';
import {IMerakiDevice, empty} from '../IMerakiDevices.js';

class MerakiDeviceCreate extends React.Component {
  componentWillMount() {
    this.props.setForm(empty());
  }

  render() {
    const {merakiDevice, error, createMerakiDevice, creating} = this.props

    return (
      <Card className="MerakiDeviceCreate">
        <h1>Crear Nuevo Usuario</h1>
        <MerakiDeviceForm 
          merakiDevice={merakiDevice}
          onSubmit={(body) => createMerakiDevice(body, empty())}
          error={error}
          loading={creating}
        />
      </Card>
    )
  }
}

MerakiDeviceCreate.propTypes = {
  merakiDevice: T.shape(IMerakiDevice),
  error: T.object,
  createMerakiDevice: T.func,
  creating: T.bool,
  setForm: T.func.isRequired,
};

export default MerakiDeviceCreate;
