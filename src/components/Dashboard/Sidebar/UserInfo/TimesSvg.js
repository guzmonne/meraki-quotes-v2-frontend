import React from 'react';
import T from 'prop-types';

const TimesSvg = ({size, fill}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={`${size}em`} height={`${size}em`} viewBox="0 0 384 512"><path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z" fill={fill}/></svg>
);

TimesSvg.propTypes = {
  fill: T.string,
  size: T.oneOfType([T.string, T.number]),
};

TimesSvg.defaultProps = {
  fill: 'black',
  size: 1,
};

export default TimesSvg;
