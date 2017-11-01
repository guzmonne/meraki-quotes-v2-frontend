import {connect} from 'react-redux';
import get from 'lodash/get';
import {
  API_SHOW,
} from '../../../../store/actions.js';
import {merakiQuotes} from '../../../../store/schemas.js';
import MerakiQuoteShow from './MerakiQuoteShow/';

const mapStateToProps = (state, props) => {
  const key = get(props, 'match.params.key');
  return {
    merakiQuote: get(state, `entities.merakiQuotes.${key}`),
    fetching: get(state, 'flags.merakiquotesApiShow'),
  };
};

const mapActionsToProps = {
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
