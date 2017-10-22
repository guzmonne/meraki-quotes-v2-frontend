import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
  <div className="Footer">
    <div className="footer-container">
      {'© Conatel S.A. 2017. Por '}
      <Link to="https://github.com/guzmonne">
        Guzmán Monné {'<@guzmonne>'}
      </Link>    
    </div>
  </div>
);

export default Footer;
