import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserInfo from './UserInfoContainer.js';
import Menu from './MenuContainer.js';
import logo from './logo.png';

const Sidebar = ({isAuthenticated}) => (
  <div className="Sidebar">
    <div className="logo-container">
      <img src={logo} alt="Conatel logo" className="logo"/>
    </div>
    <UserInfo />
    {isAuthenticated && <Menu />}
  </div>
);

Sidebar.propTypes = {
  isAuthenticated: T.bool,
};

export default Sidebar;
