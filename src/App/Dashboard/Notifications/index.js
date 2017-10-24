import './styles.css';
import React from 'react';
import T from 'prop-types';
import isArray from 'lodash/isArray';
import classnames from 'classnames';
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

const Notification = ({type="default", title, message}) => {
  const Icon = ICONS[type];

  return (
    <div className={classnames('Notification', {
      [`Notification--${type}`]: TYPES.indexOf(type) > -1,
    })}>
      <div className="Notification-content">
      {Icon && <Icon type={type} fill={'white'} size={1.5}/>}
        <span>{message}</span>
      </div>
    </div>
  )
}

const Notifications = ({notifications}) => (
  <div className="Notifications">
  {isArray(notifications) && notifications.map((notification, i) => (
    <Notification key={i} {...notification} />
  ))}
  </div>
);

Notifications.propTypes = {
  notifications: T.arrayOf(T.shape({
    message: T.string,
    icon: T.icon,
    title: T.string,
    type: T.string,
  }))
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
