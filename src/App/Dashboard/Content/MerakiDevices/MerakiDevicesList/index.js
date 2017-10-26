import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiDevicesTable from './MerakiDevicesTableContainer.js';
import MerakiDeviceShowModal from './MerakiDeviceShowModalContainer.js';
import MerakiDeviceUpdateModal from './MerakiDeviceUpdateModalContainer.js';
import MerakiDeviceDestroyModal from './MerakiDeviceDestroyModalContainer.js';
import Spinner from '../../../../../common/Spinner/';
import Pagination from '../../../../../common/Pagination/';

class MerakiDevicesList extends React.Component {
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
      displayingShowModal,
      displayingDestroyModal,
      displayingUpdateModal,
    } = this.props;

    return (
      <Card className="MerakiDevicesList">
        <h1>Lista de Equipos de Meraki</h1>
        <MerakiDevicesTable />
      {fetching && count === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && count === 0 &&
        <p>No se han encontrado equipos.</p>
      }

      {displayingDestroyModal &&
        <MerakiDeviceDestroyModal />
      }
      
      {displayingUpdateModal &&
        <MerakiDeviceUpdateModal />
      }

      {displayingShowModal &&
        <MerakiDeviceShowModal />
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

MerakiDevicesList.propTypes = {
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

export default MerakiDevicesList;
