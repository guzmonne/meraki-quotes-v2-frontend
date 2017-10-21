import './styles.css';
import React from 'react';
import T from 'prop-types';

const GravatarPicture = ({pictureSource}) => (
  <a className="GravatarPicture" 
    href="https://en.gravatar.com/connect/">
    <img src={pictureSource} alt="User"/>
  </a>
);

GravatarPicture.propTypes = {
  pictureSource: T.string,
};

export default GravatarPicture;
