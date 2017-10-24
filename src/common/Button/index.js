import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import Spinner from '../Spinner/';

const COLORS = ['red', 'grey', 'orange'];

const Button = ({loading, children, color, ...props}) => (
  loading === true
  ? 
  <button className="btn" disabled>
    <span><Spinner /></span>
  </button>
  : 
  <button className={classnames('btn', {
    [`btn-${color}`]: COLORS.indexOf(color) > -1,
  })} {...props}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  loading: T.bool,
  children: T.node,
  color: T.string,
};

export default Button;
