import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UsersTable from './UsersTableContainer.js';
import UserDestroyModal from './UserDestroyModalContainer.js';
import UserShowModal from './UserShowModalContainer.js';
import UserUpdateModal from './UserUpdateModalContainer.js';
import Spinner from '../../../../../common/Spinner/';
import Pagination from '../../../../../common/Pagination/';

class UsersList extends React.Component {
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
      displayingDestroyModal,
      displayingShowModal,
      displayingUpdateModal,
    } = this.props;

    return (
      <Card className="UsersList">
        <h1>Usuarios</h1>
        <UsersTable />
      {fetching && count === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && count === 0 &&
        <p>No se han encontrado usuarios.</p>
      }
        <Pagination 
          disabledPrev={offset === 0}
          disabledNext={count <= page * (offset + 1)}
          onPrev={() => paginate(offset - 1, page, prevItemKey)}
          onNext={() => paginate(offset + 1, page, nextItemKey)}          
        />
      {displayingDestroyModal &&
        <UserDestroyModal />
      }
      {displayingShowModal &&
        <UserShowModal />
      }
      {displayingUpdateModal &&
        <UserUpdateModal />
      }
      </Card>
    );
  } 
}

UsersList.propTypes = {
  fetch: T.func.isRequired,
  fetching: T.bool,
  count: T.number,
  offset: T.number,
  page: T.number,
  paginate: T.func,
  nextItemKey: T.string,
  prevItemKey: T.string,
  displayingDestroyModal: T.bool,
}

export default UsersList;
