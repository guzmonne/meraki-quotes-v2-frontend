import './styles.css';
import React from 'react';
import T from 'prop-types';
import Spinner from './Spinner/';

const Button = ({loading, children, ...props}) => (
  loading === true
  ? 
  <button className="btn" disabled>
    <span><Spinner /></span>
  </button>
  : 
  <button className="btn" {...props}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  loading: T.bool,
  children: T.node,
};

export default Button;
