import MerakiQuotesList from './MerakiQuotesList/';
import {merakiQuotes} from '../../../../store/schemas.js';
import createListContainer from '../HoC/createListContainer.js';

const MerakiQuotesListContainer = createListContainer({
  target: 'merakiQuotes',
  fetchingFlag: 'merakiquotesApiIndex',
  schema: merakiQuotes,
  displayName:'MerakiQuotesListContainer',
})(MerakiQuotesList);

export default MerakiQuotesListContainer;
