import {connect} from 'react-redux';
import get from 'lodash/get';
import Notifications from './Notifications/';
import {POP_NOTIFICATION} from '../../store/actions.js';

const MAXIMUM_NOTIFICATIONS = 5;

const mapStateToProps = (state) => {
  const notifications = get(state, 'notifications', []);
  return {
    notifications: notifications.slice(0, MAXIMUM_NOTIFICATIONS).reverse(),
    pendingNotifications: notifications.length - MAXIMUM_NOTIFICATIONS,
  }
};

const mapActionsToProps = {
  closeNotification: (index) => ({
    type: POP_NOTIFICATION,
    payload: index,
  })
};

const NotificationsContainer = (
  connect(mapStateToProps, mapActionsToProps)(Notifications)
);

NotificationsContainer.displayName = 'NotificationsContainer';

export default NotificationsContainer;
