import { connect } from 'react-redux';
import get from 'lodash/get';
import {
  API_CREATE,
} from '../../../../store/actions.js';
import { merakiQuotes } from '../../../../store/schemas.js';
import MerakiQuoteCreate from './MerakiQuoteCreate/';

const mapStateToProps = (state) => {
  const ids = get(state, 'ui.merakiQuotes.ids', []);

  return {
    creating: get(state, 'flags.merakiquotesApiCreate'),
    id: get(state, `ui.merakiQuotes.ids[${ids.length - 1}]`, undefined),
  }
};

const mapActionsToProps = {
  create: (body) => ({
    type: API_CREATE,
    payload: {
      body,
      endpoint: '/merakiQuotes',
      schema: merakiQuotes,
      target: 'merakiQuotes',
    },
  })
};

const MerakiQuoteCreateContainer = (
  connect(mapStateToProps, mapActionsToProps)(MerakiQuoteCreate)
);

MerakiQuoteCreateContainer.displayName = 'MerakiQuoteCreateContainer';

export default MerakiQuoteCreateContainer;
