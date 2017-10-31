import './styles.css';
import React from 'react';
import classnames from 'classnames';

const COLORS = ['default', 'white', 'grey', 'red'];

const SIZES = ['xs', 's', 'm', 'l', 'xl'];

const Spinner = ({color, size}) => (
  <div className={classnames('sk-wave sk-wave-black', {
    [`sk-wave-${size}`]: SIZES.indexOf(size) > -1,
    [`sk-wave-${color}`]: COLORS.indexOf(color) > -1,
  })}>
    <div className="sk-rect sk-rect1"></div>
    <div className="sk-rect sk-rect2"></div>
    <div className="sk-rect sk-rect3"></div>
    <div className="sk-rect sk-rect4"></div>
    <div className="sk-rect sk-rect5"></div>
  </div>
);

export default Spinner;
