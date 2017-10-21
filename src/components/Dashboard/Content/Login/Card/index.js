import './styles.css';
import React from 'react';
import T from 'prop-types';

const Card = ({children, size}) => (
  <div className="Card" style={{width: `${size}%`}}>
    {children}
  </div>
);

Card.propTypes = {
  children: T.node,
  size: T.oneOfType([T.string, T.number]),
};

Card.defaultProps = {
  size: 50,
}

export default Card;
