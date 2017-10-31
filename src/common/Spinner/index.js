import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

const Spinner = ({className, onClick, children}) => (
  <span className={classnames('Spinner', className)} onClick={onClick}>
    {children}
  </span>
);

Spinner.propTypes = {
  children: T.node.isRequired,
  onClick: T.func.isRequired,
};

export default Spinner;
