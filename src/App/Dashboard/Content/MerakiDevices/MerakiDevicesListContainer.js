import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiDevicesList from './MerakiDevicesList/';
import {
  API_INDEX,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {merakiDevices} from '../../../../store/schemas.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.merakiDevices.offset');
  const page = get(state, 'ui.merakiDevices.page');
  const ids = get(state, 'ui.merakiDevices.ids', []);
  
  let prevItemKey = (
    (offset - 1) * page <= 0 ? ids[0] : ids[(offset - 1) * page]
  );
  
  let nextItemKey = (
    offset * page + page - 1 >= ids.length 
    ? ids[ids.length - 1] 
    : ids[offset * page + page - 1]
  );

  return {
    offset,
    page,
    nextItemKey,
    prevItemKey,
    numberOfDevices: get(state, 'ui.merakiDevices.ids', []).length,    
    fetching: get(state, 'flags.merakidevicesApiIndex'),
    displayingShowModal: get(state, 'ui.merakiDevices.displayingShowModal'),
  }
};

const updateUI = (page, offset) => ({
  type: UPDATE_UI,
  payload: {
    merakiDevices: {
      offset,
      page,
    }
  }
});

const fetchMerakiDevices = (page=10, offset) => {
  let endpoint = `/merakiDevices?limit=${page * 3}`
  
  if (offset)
    endpoint += `&offset=${offset}`

  return {
    type: API_INDEX,
    payload: {
      endpoint,
      schema: [merakiDevices],
      target: 'merakiDevices',
    },
  }
}

const mapActionsToProps = {
  paginate: (offset, page, lastItemKey) => {
    if (offset < 0) offset = 0
    return {
      type: DISPATCH_MULTIPLE_ACTIONS,
      payload: [
        updateUI(page, offset),
        fetchMerakiDevices(page, lastItemKey)
      ]
    }
  },
  fetchMerakiDevices,
};

const MerakiDevicesListContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiDevicesList)
);

MerakiDevicesListContainer.displayName = 'MerakiDevicesListContainer';

export default MerakiDevicesListContainer;
