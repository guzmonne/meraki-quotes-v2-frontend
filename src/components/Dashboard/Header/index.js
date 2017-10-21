import './styles.css';
import React from 'react';
import T from 'prop-types';
import UserPicture from './UserPicture/'

const Header = ({isAuthenticated}) => (
  <div className="Header">
    <h3>Meraki Quotes</h3>
    {isAuthenticated === true && <UserPicture />}
  </div>
);

Header.propTypes = {
  isAuthenticated: T.bool,
};

export default Header;
