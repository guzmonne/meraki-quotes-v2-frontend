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

const TYPES = ['info', 'danger', 'warning', 'success'];

const ICONS = {
  default: SolidExclamationSvg,
  danger: SolidTimesSvg,
  info: SolidExclamationCircleSvg,
  warning: SolidExclamationTriangleSvg,
  success: SolidCheckSvg,
}

const Notification = ({type, message, fadeOut, onClick}) => {
  const Icon = ICONS[type];
  console.log(fadeOut);
  return (
    <Animate animation={fadeOut === true ? 'fadeOutUp' : 'fadeInDown'}>
      <div onClick={onClick} className={classnames('Notification', {
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

const IMessage = {
  message: T.oneOfType([T.string, T.number]),
  type: T.string,
  fadeOut: T.bool,
};

Notification.propTypes = {
  ...IMessage,
  onClick: T.func,
};

Notification.defaultProps = {
  type: 'default',
}

const Notifications = ({notifications, closeNotification}) => (
  <div className="Notifications">
  {isArray(notifications) && notifications.length > 5 &&
    <Notification type="info"
      message={notifications.length === 6
        ? 'Tiene una notificación adicional...'
        : `Tiene ${notifications.length - 5} notificaciones adicionales`
      }
    />
  }
  {isArray(notifications) && 
    notifications.slice(0, 5).map((notification, i) => (
    <Notification key={i}
      onClick={closeNotification.bind(null, i)}  
      {...notification} 
    />
  ))}
  </div>
);

Notifications.propTypes = {
  notifications: T.arrayOf(T.shape(IMessage)),
  closeNotification: T.func.isRequired,
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
