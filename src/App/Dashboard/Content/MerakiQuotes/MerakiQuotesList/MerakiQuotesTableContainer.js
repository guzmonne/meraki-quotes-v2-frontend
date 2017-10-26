import MerakiQuotesTable from './MerakiQuotesTable/';
import createTableContainer from '../../HoC/createTableContainer.js';

const MerakiQuotesTableContainer = createTableContainer({
  target: 'merakiQuotes',
  encodeKey: ({UserID, createdAt}) => (
    btoa(JSON.stringify({UserID, createdAt}))
  ),
  displayName:'MerakiQuotesTable',
})(MerakiQuotesTable)

export default MerakiQuotesTableContainer;
