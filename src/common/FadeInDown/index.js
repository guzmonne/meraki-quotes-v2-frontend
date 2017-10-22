import React from 'react';
import T from 'prop-types';

const FadeInDown = ({children}) => (
  React.cloneElement(children, {
    ...children.props,
    ['data-animation']: 'fadeInDown',
  })
);

FadeInDown.propTypes = {
  children: T.node,
};

export default FadeInDown;
