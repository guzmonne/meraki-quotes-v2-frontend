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
    <b>Inicie sesión para más opciones.</b>
  </div>
);

export default Sidebar;
