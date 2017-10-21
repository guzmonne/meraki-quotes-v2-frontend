import React from 'react';
import T from 'prop-types';

const UserSvg = ({size, fill}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={`${size}em`} height={`${size}em`}viewBox="0 0 448 512"><path d="M343.585 224.258C359.218 200.995 368 173.249 368 144 368 64.455 303.513 0 224 0 144.455 0 80 64.487 80 144c0 29.156 8.736 56.926 24.415 80.258C46.277 228.121 0 276.449 0 336v104c0 39.701 32.299 72 72 72h304c39.701 0 72-32.299 72-72V336c0-59.524-46.251-107.878-104.415-111.742zM224 48c53.019 0 96 42.981 96 96s-42.981 96-96 96-96-42.981-96-96 42.981-96 96-96zm176 392c0 13.255-10.745 24-24 24H72c-13.255 0-24-10.745-24-24V336c0-35.346 28.654-64 64-64h45.987a144.076 144.076 0 0 0 132.025 0H336c35.346 0 64 28.654 64 64v104z" fill={fill}/></svg>
);

UserSvg.propTypes = {
  fill: T.string,
  size: T.oneOfType([T.string, T.number]),
};

UserSvg.defaultProps = {
  fill: 'black',
  size: 1,
};

export default UserSvg;
