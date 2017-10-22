import './styles.css';
import React from 'react';
import T from 'prop-types';
import FadeInDown from '../../../common/FadeInDown/';
import GravatarPicture from './GravatarPictureContainer.js'

const Header = ({isAuthenticated}) => (
  <FadeInDown>
    <div className="Header">
      <h3>Meraki Quotes</h3>
      {isAuthenticated === true && <GravatarPicture />}
    </div>
  </FadeInDown>  
);

Header.propTypes = {
  isAuthenticated: T.bool,
};

export default Header;
