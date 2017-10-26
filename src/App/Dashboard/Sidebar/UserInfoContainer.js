import get from 'lodash/get';
import {connect} from 'react-redux';
import UserInfo from './UserInfo/';
import {LOGOUT_REQUEST} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  isLoggingOut: get(state, 'flags.logout'),
  isAuthenticated: get(state, 'flags.isAuthenticated'),
  username: get(state, 'ui.user.username'),
  isSyncing: (
    get(state, 'flags.usersApiIndex') ||
    get(state, 'flags.merakidevicesApiIndex')    
  ),
});

const mapActionsToProps = {
  onClick: () => ({
    type: LOGOUT_REQUEST
  })
};

const UserInfoContainer = connect(mapStateToProps, mapActionsToProps)(UserInfo);

UserInfoContainer.displayName = 'UserInfoContainer';

export default UserInfoContainer;
