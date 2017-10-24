import React from 'react';
import T from 'prop-types';

const SolidTimesSvg = ({size, fill}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={`${size}em`} height={`${size}em`} viewBox="0 0 384 512"><path d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z" fill={fill}/></svg>
);

SolidTimesSvg.propTypes = {
  fill: T.string,
  size: T.oneOfType([T.string, T.number]),
};

SolidTimesSvg.defaultProps = {
  fill: 'black',
  size: 1,
};

export default SolidTimesSvg;
