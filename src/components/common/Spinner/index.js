import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

const COLORS = ['black', 'red', 'grey'];

const SIZES = ['xl'];

const Spinner = ({color, size}) => (
  <div className={classnames('sk-wave', {
    [`sk-wave-${color}`]: COLORS.indexOf(color) > -1,
    [`sk-wave-${size}`]: SIZES.indexOf(size) > -1,
  })}>
    <div className="sk-rect sk-rect1"></div>
    <div className="sk-rect sk-rect2"></div>
    <div className="sk-rect sk-rect3"></div>
    <div className="sk-rect sk-rect4"></div>
    <div className="sk-rect sk-rect5"></div>
  </div>
);

Spinner.propTypes = {
  color: T.string,
  size: T.string,
};

Spinner.defaultProps = {
  size: 'xs',
};

export default Spinner;
