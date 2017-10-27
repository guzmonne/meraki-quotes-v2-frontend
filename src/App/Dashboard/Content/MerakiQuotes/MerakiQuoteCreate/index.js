import MerakiQuoteForm from '../MerakiQuoteForm/';
import {IMerakiQuote, empty} from '../IMerakiQuotes.js';
import createCreateComponent from '../../HoC/createCreateComponent.js';

const MerakiQuoteCreate = createCreateComponent({
  empty,
  displayName: 'MerakiQuoteCreate',
  title: 'Crear Nuevo Quote',
  itemType: IMerakiQuote,
})(MerakiQuoteForm);

export default MerakiQuoteCreate;
