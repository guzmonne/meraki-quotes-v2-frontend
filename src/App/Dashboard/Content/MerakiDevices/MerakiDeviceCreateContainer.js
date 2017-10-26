import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDeviceCreate from './MerakiDeviceCreate/';
import {
  API_CREATE,
  UPDATE_UI,
} from '../../../../store/actions.js';
import {merakiDevices} from '../../../../store/schemas.js';

const mapStateToProps = (state) => ({
  merakiDevice: get(state, 'ui.merakiDevices.form'),
  error: get(state, 'ui.merakidevicesApiCreate.error'),
  creating: get(state, 'flags.merakidevicesApiCreate')
});

const createMerakiDevice = (body, formData) => ({
  type: API_CREATE,
  payload: {
    body,
    endpoint: '/merakiDevices',
    schema: merakiDevices,
    target: 'merakiDevices',
    formData,
    formName: 'form',
  },
})

const mapActionsToProps = {
  createMerakiDevice,
  setForm: (form) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        form,
      }
    }
  })
};

const MerakiDeviceCreateContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDeviceCreate)
);

MerakiDeviceCreateContainer.displayName = 'MerakiDeviceCreateContainer';

export default MerakiDeviceCreateContainer;
