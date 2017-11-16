import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import Spinner from '../Spinner/';

const COLORS = ['red', 'grey', 'orange', 'green'];

const className = (color, active) => (
  classnames('btn', {
    [`btn-${color}`]: COLORS.indexOf(color) > -1,
    'btn-active': active === true,
  })
)

const Button = ({loading, children, color, active, ...props}) => (
  loading === true
  ? 
  <button className={className(color, active)} disabled>
    <span><Spinner color="white"/></span>
  </button>
  : 
  <button className={className(color, active)} {...props}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  loading: T.bool,
  children: T.node,
  color: T.string,
};

export default Button;
