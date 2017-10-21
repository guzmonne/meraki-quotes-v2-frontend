import './styles.css';
import React from 'react';
import UserInfo from './UserInfo/';
import logo from './logo.png';

const Sidebar = () => (
  <div className="Sidebar">
    <div className="logo-container">
      <img src={logo} alt="Conatel logo" className="logo"/>
    </div>
    <UserInfo />
  </div>
);

export default Sidebar;
