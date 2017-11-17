import {connect} from 'react-redux';
import get from 'lodash/get';
import {
  API_SHOW,
  API_UPDATE,
  DISPATCH_MULTIPLE_ACTIONS,
  UPDATE_UI,
} from '../../../../store/actions.js';
import {merakiQuotes} from '../../../../store/schemas.js';
import MerakiQuoteShow from './MerakiQuoteShow/';

const mapStateToProps = (state, props) => {
  const key = get(props, 'match.params.key');
  return {
    merakiQuote: get(state, `entities.merakiQuotes.${key}`),
    showingModal: get(state, 'ui.merakiQuotes.showingNameAndDescriptionModal'),
  };
};

const mapActionsToProps = {
  openModal: () => ({
    type: UPDATE_UI,
    payload: {
      merakiQuotes: {
        showingNameAndDescriptionModal: true,
      }
    }
  }),
  closeModal: () => ({
    type: UPDATE_UI,
    payload: {
      merakiQuotes: {
        showingNameAndDescriptionModal: false,
      }
    }
  }),
  updateQuote: (key, body) => {
    const payload = {
      endpoint: `/merakiQuotes/${key}`,
      target: 'merakiQuotes',
      schema: merakiQuotes,
      body,
      key,
    };
    return {
      type: DISPATCH_MULTIPLE_ACTIONS,
      payload: {
        actions: [{
          type: 'MERAKIQUOTES_API_UPDATE_REQUEST',
          payload,
        }, {
          type: API_UPDATE,
          payload,
        }],
        interval: 1000 
      },
    };
  },
  fetch: (key) => ({
    type: API_SHOW,
    payload: {
      endpoint: `/merakiQuotes/${key}`,
      target: 'merakiQuotes',
      schema: merakiQuotes,
    }
  })
};

const MerakiQuoteShowContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiQuoteShow)
);

MerakiQuoteShowContainer.displayName = 'MerakiQuoteShowContainer';

export default MerakiQuoteShowContainer;
