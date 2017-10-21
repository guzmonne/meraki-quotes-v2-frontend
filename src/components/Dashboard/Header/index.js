import './styles.css';
import React from 'react';
import T from 'prop-types';
import GravatarPicture from './GravatarPictureContainer.js'

const Header = ({isAuthenticated}) => (
  <div className="Header">
    <h3>Meraki Quotes</h3>
    {isAuthenticated === true && <GravatarPicture />}
  </div>
);

Header.propTypes = {
  isAuthenticated: T.bool,
};

export default Header;
