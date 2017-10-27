import MerakiQuoteCreate from './MerakiQuoteCreate/';
import {merakiQuotes} from '../../../../store/schemas.js';
import createCreateContainer from '../HoC/createCreateContainer.js';

const MerakiQuoteCreateContainer = createCreateContainer({
  target: 'merakiQuotes',
  schema: merakiQuotes,
  displayName: 'MerakiQuoteCreateContainer',
})(MerakiQuoteCreate);

export default MerakiQuoteCreateContainer;
