import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

const Card = ({className, children}) => (
  <div className={classnames('Card', className)}>
    {children}
  </div>
);

Card.propTypes = {
  children: T.node,
  className: T.string,
};

export default Card;
