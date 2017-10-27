import React from 'react';
import T from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import {UPDATE_UI} from '../../../../../store/actions.js';
import ShowModal from '../../Modals/ShowModal/'
import UserProfile from '../../UserProfile/';
import {IUser} from '../IUsers';

const UserShowModal = ({user, closeModal}) => (
  <ShowModal 
    title={`${user.username}`} 
    closeModal={closeModal}
  >
    <UserProfile user={user} />
  </ShowModal>
);

UserShowModal.propTypes = {
  user: T.shape(IUser),
  closeModal: T.func.isRequired,
};


const mapStateToProps = (state) => {
  const key = get(state, 'ui.users.usersSelectedToShowKey')
  return {
    user: get(state, `entities.users.${key}`),
  }
};

const mapActionsToProps = {
  closeModal: () => ({
    type: UPDATE_UI,
    payload: {
      users: {
        displayingShowModal: false,
        userSelectedToShow: undefined,
      }
    }
  }),
};

const UserShowModalContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserShowModal)
);

UserShowModalContainer.displayName = 'UserShowModalContainer';

export default UserShowModalContainer;
