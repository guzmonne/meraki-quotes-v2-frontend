import get from 'lodash/get';
import {connect} from 'react-redux';
import UserInfo from './UserInfo/';
import {LOGOUT} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  isAuthenticated: get(state, 'flags.isAuthenticated'),
  username: get(state, 'ui.user.username'),
});

const mapActionsToProps = {
  onClick: () => ({
    type: LOGOUT
  })
};

const UserInfoContainer = connect(mapStateToProps, mapActionsToProps)(UserInfo);

UserInfoContainer.displayName = 'UserInfoContainer';

export default UserInfoContainer;
