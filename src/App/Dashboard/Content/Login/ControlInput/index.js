import './styles.css';
import React from 'react';
import T from 'prop-types';

const ControlInput = ({value, label, onChange, ...props}) => (
  <div className="ControlInput">      
    <input 
      type="text"
      value={value}
      onChange={onChange}
      className={value !== '' ? 'has-content' : ''}
      {...props}
    />
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>{label}</label>
  </div>
);

ControlInput.propTypes = {
  value: T.any.isRequired,
  label: T.string,
  text: T.string,
  onChange: T.func.isRequired,
};

ControlInput.defaultProps = {
  type: 'text',
};

export default ControlInput;
