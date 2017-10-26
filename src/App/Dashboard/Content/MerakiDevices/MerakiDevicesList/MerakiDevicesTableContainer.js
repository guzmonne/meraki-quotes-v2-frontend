import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDevicesTable from './MerakiDevicesTable/';
import {UPDATE_UI} from '../../../../../store/actions.js';

const encodeKey = ({Category, PartNumber}) => (
  btoa(JSON.stringify({Category, PartNumber}))
);

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.merakiDevices.offset');
  const page = get(state, 'ui.merakiDevices.page');
  const merakiDevices = (
    get(state, 'ui.merakiDevices.ids', [])
    .slice(offset * page, offset * page + page)
    .map(id => (
      get(state, `entities.merakiDevices.${id}`)
    ))
  );

  return {
    merakiDevices
  }
};

const mapActionsToProps = {
  displayDestroyModal: (device) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingDestroyModal: true,
        merakiDeviceSelectedToDestroy: encodeKey(device),
      }
    }
  }),
  displayShowModal: (device) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingShowModal: true,
        merakiDeviceSelectedToShowKey: encodeKey(device),
      }
    }
  }),
  displayUpdateModal: (device) => ({
    type: UPDATE_UI,
    payload: {
      merakiDevices: {
        displayingUpdateModal: true,
        merakiDeviceSelectedToUpdateKey: encodeKey(device),
      }
    }
  })
};

const MerakiDevicesTableContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDevicesTable)
);

MerakiDevicesTableContainer.displayName = 'MerakiDevicesTableContainer';

export default MerakiDevicesTableContainer;
