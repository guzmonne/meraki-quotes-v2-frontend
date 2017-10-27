import {IMerakiQuotes} from '../../IMerakiQuotess.js';
import MerakiQuoteRow from './MerakiQuoteRow/';
import createTableComponent from '../../../HoC/createTableComponent.js';

const MerakiQuotesTable = createTableComponent({
  headers: [
    'Número de Parte',
    'Categoría',        
    'Descripción',
    'Creado',
    'Precio',
    '',
  ],
  rowId: 'ID',
  schema: IMerakiQuotes,
  displayName: 'MerakiQuotesTable',
})(MerakiQuoteRow);

export default MerakiQuotesTable;
