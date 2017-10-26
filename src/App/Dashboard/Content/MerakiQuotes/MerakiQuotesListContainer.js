import {connect} from 'react-redux';
import get from 'lodash/get';
import MerakiQuotesList from './MerakiQuotesList/';
import {
  API_INDEX,
  UPDATE_UI,
  DISPATCH_MULTIPLE_ACTIONS
} from '../../../../store/actions.js';
import {merakiQuotes} from '../../../../store/schemas.js';

const mapStateToProps = (state) => {
  const offset = get(state, 'ui.merakiQuotes.offset');
  const page = get(state, 'ui.merakiQuotes.page');
  const ids = get(state, 'ui.merakiQuotes.ids', []);
  
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
    numberOfQuotes: get(state, 'ui.merakiQuotes.ids', []).length,    
    fetching: get(state, 'flags.merakidevicesApiIndex'),
    displayingShowModal: get(state, 'ui.merakiQuotes.displayingShowModal'),
    displayingUpdateModal: get(state, 'ui.merakiQuotes.displayingUpdateModal'),
    displayingDestroyModal: (
      get(state, 'ui.merakiQuotes.displayingDestroyModal')
    ),
  }
};

const updateUI = (page, offset) => ({
  type: UPDATE_UI,
  payload: {
    merakiQuotes: {
      offset,
      page,
    }
  }
});

const fetchMerakiQuotes = (page=10, offset) => {
  let endpoint = `/merakiQuotes?limit=${page * 3}`
  
  if (offset)
    endpoint += `&offset=${offset}`

  return {
    type: API_INDEX,
    payload: {
      endpoint,
      schema: [merakiQuotes],
      target: 'merakiQuotes',
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
        fetchMerakiQuotes(page, lastItemKey)
      ]
    }
  },
  fetchMerakiQuotes,
};

const MerakiQuotesListContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiQuotesList)
);

MerakiQuotesListContainer.displayName = 'MerakiQuotesListContainer';

export default MerakiQuotesListContainer;
