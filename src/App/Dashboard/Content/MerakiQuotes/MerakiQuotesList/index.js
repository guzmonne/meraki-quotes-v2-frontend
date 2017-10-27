import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiQuotesTable from './MerakiQuotesTableContainer.js';
import MerakiQuoteShowModal from './MerakiQuoteShowModalContainer.js';
import MerakiQuoteUpdateModal from './MerakiQuoteUpdateModalContainer.js';
import MerakiQuoteDestroyModal from './MerakiQuoteDestroyModalContainer.js';
import Spinner from '../../../../../common/Spiner/';
import Pagination from '../../../../../common/Pagination/';

class MerakiQuotesList extends React.Component {
  componentWillMount() {
    this.props.fetchMerakiQuotes(this.props.page);
  }

  render() {
    const {
      fetching,
      numberOfQuotes,
      offset,
      page,
      paginate,
      prevItemKey,
      nextItemKey,
      displayingShowModal,
      displayingDestroyModal,
      displayingUpdateModal,
    } = this.props;

    return (
      <Card className="MerakiQuotesList">
        <h1>Lista de Cotizaciones de Meraki</h1>
        <MerakiQuotesTable />
      {fetching && numberOfQuotes === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && numberOfQuotes === 0 &&
        <p>No se han encontrado cotizaciones.</p>
      }

      {displayingDestroyModal &&
        <MerakiQuoteDestroyModal />
      }
      
      {displayingUpdateModal &&
        <MerakiQuoteUpdateModal />
      }

      {displayingShowModal &&
        <MerakiQuoteShowModal />
      }
        <Pagination 
          disabledPrev={offset === 0}
          disabledNext={numberOfQuotes <= page * (offset + 1)}
          onPrev={() => paginate(offset - 1, page, prevItemKey)}
          onNext={() => paginate(offset + 1, page, nextItemKey)}          
        />
      </Card>
    );
  } 
}

MerakiQuotesList.propTypes = {
  fetchMerakiQuotes: T.func.isRequired,
  fetching: T.bool,
  numberOfQuotes: T.number,
  offset: T.number,
  page: T.number,
  paginate: T.func,
  nextItemKey: T.string,
  prevItemKey: T.string,
  displayingDestroyModal: T.bool,
  displayingShowModal: T.bool,
  displayingUpdateModal: T.bool,
}

export default MerakiQuotesList;
