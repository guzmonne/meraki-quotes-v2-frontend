import './styles.css';
import React from 'react';
import classnames from 'classnames';
import T from 'prop-types';

const TYPES = [
  'default',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
];

const Label = ({type, children}) => (
  <span className={classnames('Label', {
    [`Label-${type}`]: TYPES.indexOf(type) > -1
  })}>
    {children}
  </span>
);

Label.propTypes = {
  type: T.string,
  children: T.node,
};

Label.defaultProps = {
  type: 'default',
};

export default Label;
