import './styles.css';
import React from 'react';
import T from 'prop-types';
import isArray from 'lodash/isArray';
import classnames from 'classnames';
import Animate from '../../../common/Animate/';
import SolidTimesSvg from '../../../common/Icons/SolidTimesSvg.js';
import SolidCheckSvg from '../../../common/Icons/SolidCheckSvg.js';
import SolidExclamationCircleSvg from '../../../common/Icons/SolidExclamationCircleSvg.js';
import SolidExclamationTriangleSvg from '../../../common/Icons/SolidExclamationTriangleSvg.js';
import SolidExclamationSvg from '../../../common/Icons/SolidExclamationSvg.js';

const TYPES = ['default', 'info', 'danger', 'warning', 'success'];

const ICONS = {
  default: SolidExclamationSvg,
  danger: SolidTimesSvg,
  info: SolidExclamationCircleSvg,
  warning: SolidExclamationTriangleSvg,
  success: SolidCheckSvg,
}

class Notification extends React.Component {
  state = {
    fadeOut: false,
  }

  componentDidMount() {
    if (this.props.static === true) return;
    this.fadeOutTimeout = setTimeout(() => (
      this.setState({fadeOut: true})
    ), 3000);
    this.closeTimeout = setTimeout(() => (
      this.close()
    ), 4500);
  }

  componentWillUnmount() {
    window.clearTimeout(this.fadeOutTimeout);
    window.clearTimeout(this.closeTimeout);
  }

  close = (e) => {
    this.props.onClose && this.props.onClose(this.props.id);
  }

  render() {
    const {fadeOut} = this.state;
    const {type, message} = this.props;
    const Icon = ICONS[type];
    return (
      <Animate animation={fadeOut === true ? 'fadeOutUp' : 'fadeInDown'}>
        <div onClick={this.close} className={classnames('Notification', {
          [`Notification--${type}`]: TYPES.indexOf(type) > -1,
        })}>
          <div className="Notification-content">
          {Icon && <Icon type={type} fill={'white'} size={1.5}/>}
            <span>{message}</span>
          </div>
        </div>
      </Animate>
    )
  }
}

const IMessage = {
  id: T.string.isRequired,
  message: T.oneOfType([T.string, T.number]),
  type: T.string,
};

Notification.propTypes = {
  ...IMessage,
  onClose: T.func,
  static: T.bool,
};

Notification.defaultProps = {
  type: 'default',
}

const Notifications = ({
  notifications,
  closeNotification,
  pendingNotifications,
}) => (
  <div className="Notifications">
  {isArray(notifications) && notifications.length === 5 &&
    <Notification type="info"
      static={true}
      message={pendingNotifications === 1
        ? 'Tiene una notificación adicional...'
        : `Tiene ${pendingNotifications} notificaciones adicionales`
      }
    />
  }
  {isArray(notifications) && 
    notifications.map((notification, i) => (
    <Notification key={notification.id}
      onClose={closeNotification}  
      {...notification} 
    />
  ))}
  </div>
);

Notifications.propTypes = {
  notifications: T.arrayOf(T.shape(IMessage)),
  closeNotification: T.func.isRequired,
  pendingNotifications: T.number,
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
