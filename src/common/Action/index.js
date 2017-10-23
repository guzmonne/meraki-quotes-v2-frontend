import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

const Action = ({className, onClick, children}) => (
  <span className={classnames('Action', className)} onClick={onClick}>
    {children}
  </span>
);

Action.propTypes = {
  children: T.node.isRequired,
  onClick: T.func.isRequired,
};

export default Action;
