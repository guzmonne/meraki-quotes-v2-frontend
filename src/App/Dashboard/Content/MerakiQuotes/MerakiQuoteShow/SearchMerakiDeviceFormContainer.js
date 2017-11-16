import { connect } from 'react-redux';
import get from 'lodash/get';
import {
  API_INDEX
} from '../../../../../store/actions.js';
import { merakiDevices } from '../../../../../store/schemas.js';
import SearchMerakiDeviceForm from './SearchMerakiDeviceForm/';

const mapStateToProps = (state, props) => {
  const ids = get(state, 'ui.merakiDevices.ids', []);
  
  return {
    items: ids.map(id => get(state, `entities.merakiDevices.${id}`)),
  };
};

const mapActionsToProps = {
  search: () => ({
    type: API_INDEX,
    payload: {
      endpoint: '/merakiDevices?limit=1000',
      schema: [merakiDevices],
      target: 'merakiDevices',
    },
  })
};

const SearchMerakiDeviceFormContainer = (
  connect(mapStateToProps, mapActionsToProps)(SearchMerakiDeviceForm)
);

SearchMerakiDeviceFormContainer.displayName = 'SearchMerakiDeviceFormContainer';

export default SearchMerakiDeviceFormContainer;
