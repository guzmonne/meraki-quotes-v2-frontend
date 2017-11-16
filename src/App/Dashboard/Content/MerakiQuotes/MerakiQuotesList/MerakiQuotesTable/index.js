import {IMerakiQuotes} from '../../IMerakiQuotes.js';
import MerakiQuoteRow from './MerakiQuoteRow/';
import createTableComponent from '../../../HoC/createTableComponent.js';

const MerakiQuotesTable = createTableComponent({
  headers: [
    'ID',
    'Nombre',        
    'Descripción',
    'Creado',
  ],
  rowId: ({ UserID, createdAt }) => btoa(JSON.stringify({ UserID, createdAt })),
  schema: IMerakiQuotes,
  displayName: 'MerakiQuotesTable',
})(MerakiQuoteRow);

export default MerakiQuotesTable;
