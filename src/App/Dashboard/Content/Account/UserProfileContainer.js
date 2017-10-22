import get from 'lodash/get';
import {connect} from 'react-redux';
import UserProfile from './UserProfile/';

const mapStateToProps = (state) => ({
  user: get(state, 'ui.user'),
});

const mapActionsToProps = {};

const UserProfileContainer = (
  connect(mapStateToProps, mapActionsToProps)(UserProfile)
);

UserProfileContainer.displayName = 'UserProfileContainer';

export default UserProfileContainer;
