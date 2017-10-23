import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../../Card/';
import UsersTable from './UsersTableContainer.js';
import UserDestroyModal from './UserDestroyModalContainer.js';
import Spinner from '../../../../../common/Spinner/';
import Pagination from '../../../../../common/Pagination/';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers(this.props.page);
  }

  render() {
    const {
      fetching,
      numberOfUsers,
      offset,
      page,
      paginate,
      prevItemKey,
      nextItemKey,
      showDestroyModal,
    } = this.props;

    return (
      <Card className="UsersList">
        <h1>Usuarios</h1>
        <UsersTable />
      {fetching && numberOfUsers === 0 &&
        <Spinner color="black" size="xl"/>
      }
      {!fetching && numberOfUsers === 0 &&
        <p>No se han encontrado usuarios.</p>
      }
        <Pagination 
          disabledPrev={offset === 0}
          disabledNext={numberOfUsers <= page * (offset + 1)}
          onPrev={() => paginate(offset - 1, page, prevItemKey)}
          onNext={() => paginate(offset + 1, page, nextItemKey)}          
        />
      {showDestroyModal &&
        <UserDestroyModal />
      }
      </Card>
    );
  } 
}

UsersList.propTypes = {
  fetchUsers: T.func.isRequired,
  fetching: T.bool,
  numberOfUsers: T.number,
  offset: T.number,
  page: T.number,
  paginate: T.func,
  nextItemKey: T.string,
  prevItemKey: T.string,
  showDestroyModal: T.bool,
}

export default UsersList;
