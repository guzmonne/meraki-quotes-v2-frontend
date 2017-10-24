import React from 'react';
import T from 'prop-types';

const PencilSvg = ({size, fill}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={`${size}em`} height={`${size}em`} viewBox="0 0 512 512"><path d="M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329 484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331 26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210 391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409 338H126v48h48v41.59l-18.282 18.401-73.586 12.141zm378.985-319.533l-.051.051-.051.051-48.03 48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259 33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z" fill={fill}/></svg>
);

PencilSvg.propTypes = {
  fill: T.string,
  size: T.oneOfType([T.string, T.number]),
};

PencilSvg.defaultProps = {
  fill: 'black',
  size: 1,
};

export default PencilSvg;
