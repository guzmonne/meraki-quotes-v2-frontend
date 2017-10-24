import {connect} from 'react-redux';
import Notifications from './Notifications/';

const mapStateToProps = (state) => ({
  notifications: [{
    message: 'You smell good',
    type: 'default',
    icon: 'warning',
  }, {
    message: 'You smell good',
    type: 'warning',
    icon: 'warning',
  }, {
    message: 'You smell good',
    type: 'info',
    icon: 'warning',
  }, {
    message: 'You smell good',
    type: 'success',
    icon: 'warning',
    title: 'Success.'
  }, {
    message: 'You smell good',
    type: 'danger',
    icon: 'warning',
  }],
});

const mapActionsToProps = {};

const NotificationsContainer = (
  connect(mapStateToProps, mapActionsToProps)(Notifications)
);

NotificationsContainer.displayName = 'NotificationsContainer';

export default NotificationsContainer;
