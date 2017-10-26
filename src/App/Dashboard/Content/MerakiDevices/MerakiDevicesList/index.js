import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import MerakiDevicesTable from './MerakiDevicesTableContainer.js';
import Spinner from '../../../../../common/Spinner/';
import Pagination from '../../../../../common/Pagination/';

class MerakiDevicesList extends React.Component {
  componentWillMount() {
    this.props.fetchMerakiDevices(this.props.page);
  }

  render() {
    const {
      fetching,
      numberOfDevices,
      offset,
      page,
      paginate,
      prevItemKey,
      nextItemKey,
    } = this.props;

    return (
      <Card className="MerakiDevicesList">
        <h1>Lista de Equipos de Meraki</h1>
        <MerakiDevicesTable />
      {fetching && numberOfDevices === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && numberOfDevices === 0 &&
        <p>No se han encontrado equipos.</p>
      }
        <Pagination 
          disabledPrev={offset === 0}
          disabledNext={numberOfDevices <= page * (offset + 1)}
          onPrev={() => paginate(offset - 1, page, prevItemKey)}
          onNext={() => paginate(offset + 1, page, nextItemKey)}          
        />
      </Card>
    );
  } 
}

MerakiDevicesList.propTypes = {
  fetchMerakiDevices: T.func.isRequired,
  fetching: T.bool,
  numberOfDevices: T.number,
  offset: T.number,
  page: T.number,
  paginate: T.func,
  nextItemKey: T.string,
  prevItemKey: T.string,
  displayingDestroyModal: T.bool,
}

export default MerakiDevicesList;

/**
{displayingDestroyModal &&
  <UserDestroyModal />
}
{displayingShowModal &&
  <UserShowModal />
}
{displayingUpdateModal &&
  <UserUpdateModal />
}
 */
