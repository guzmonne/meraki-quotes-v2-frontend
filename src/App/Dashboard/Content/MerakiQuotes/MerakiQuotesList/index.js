import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiQuotesTable from './MerakiQuotesTableContainer.js';
import Spinner from '../../../../../common/Spinner/';
import Pagination from '../../../../../common/Pagination/';

class MerakiQuotesList extends React.Component {
  componentWillMount() {
    this.props.fetch(this.props.page);
  }

  render() {
    const {
      fetching,
      count,
      offset,
      page,
      paginate,
      prevItemKey,
      nextItemKey,
    } = this.props;

    return (
      <Card className="MerakiQuotesList">
        <h1>Lista de Cotizaciones de Meraki</h1>
        <MerakiQuotesTable />
      {fetching && count === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && count === 0 &&
        <p>No se han encontrado cotizaciones.</p>
      }

        <Pagination 
          disabledPrev={offset === 0}
          disabledNext={count <= page * (offset + 1)}
          onPrev={() => paginate(offset - 1, page, prevItemKey)}
          onNext={() => paginate(offset + 1, page, nextItemKey)}          
        />
      </Card>
    );
  } 
}

MerakiQuotesList.propTypes = {
  fetch: T.func.isRequired,
  fetching: T.bool,
  count: T.number,
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
