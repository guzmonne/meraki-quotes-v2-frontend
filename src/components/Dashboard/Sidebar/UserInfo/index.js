import './styles.css';
import React from 'react';
import UserSvg from './UserSvg.js';

const UserInfo = () => (
  <div className="UserInfo">
    <span className="content">
      <UserSvg fill="green" size="1" />
      <span>Desconectado</span>
    </span>
  </div>
);

export default UserInfo;
