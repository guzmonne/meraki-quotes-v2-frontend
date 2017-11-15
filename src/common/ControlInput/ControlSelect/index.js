import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

class ControlSelect extends React.Component {
  state = {
    pristine: true,
    dirty: false,
  }

  handleOnChange = (onChange) => (e) => {
    if (this.state.pristine === true) {
      this.setState({ pristine: false });
    }

    onChange(e);
  }

  handleOnBlur = () => {
    this.setState({
      dirty: true,
    });
  }

  render() {
    const { pristine, dirty } = this.state;
    const {
      value,
      label,
      error,
      errorMessage,
      onChange,
      options = [],
      ...props
    } = this.props;

    return (
      <div className={classnames('ControlInput ControlSelect', {
        [`ControlInput--error`]: dirty && !pristine && error
      })}>
        <select
          value={value}
          onChange={this.handleOnChange(onChange)}
          onBlur={this.handleOnBlur}
          className={value !== '' ? 'has-content' : ''}
          {...props}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <span className="highlight"></span>
        <span className={classnames('bar', {
          [`bar--error`]: dirty && !pristine && error
        })}></span>
        <label>{label}</label>
        {errorMessage && error && !pristine && dirty &&
          <span className="error-message">{errorMessage}</span>
        }
      </div>
    )
  }
}

ControlSelect.propTypes = {
  value: T.any.isRequired,
  label: T.string,
  text: T.string,
  onChange: T.func.isRequired,
  error: T.bool,
  errorMessage: T.string,
};

ControlSelect.defaultProps = {
  type: 'text',
};

export default ControlSelect;
