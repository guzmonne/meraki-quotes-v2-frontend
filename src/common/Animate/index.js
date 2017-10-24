import './styles.css';
import React from 'react';
import T from 'prop-types';

const Animate = ({animation, children}) => (
  React.cloneElement(children, {
    ...children.props,
    'data-animation': animation,
  })
);

Animate.propTypes = {
  animation: T.oneOf(['fadeInDown', 'fadeOutUp']),
  children: T.node,
};

Animate.defaultProps = {
  animation: 'fadeInDown',
}

export default Animate;
