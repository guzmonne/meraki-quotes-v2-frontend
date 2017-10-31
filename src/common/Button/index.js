import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import Spinner from '../Spinner/';

const COLORS = ['red', 'grey', 'orange', 'green'];

const className = (color) => (
  classnames('btn', {
    [`btn-${color}`]: COLORS.indexOf(color) > -1,
  })
)

const Button = ({loading, children, color, ...props}) => (
  loading === true
  ? 
  <button className={className(color)} disabled>
    <span><Spinner color="white"/></span>
  </button>
  : 
  <button className={className(color)} {...props}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  loading: T.bool,
  children: T.node,
  color: T.string,
};

export default Button;
