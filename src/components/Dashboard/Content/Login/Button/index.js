import './styles.css';
import React from 'react';
import T from 'prop-types';

const Button = ({children, ...props}) => (
  <button className="btn" {...props}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  children: T.node,
};

export default Button;
