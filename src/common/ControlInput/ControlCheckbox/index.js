import './styles.css';
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

class ControlCheckbox extends React.Component {
  state = {
    dirty: false,
  }

  handleOnChange = (e) => {
    let value = e.target.checked;

    this.props.onChange({target: {value}});
  }

  handleOnBlur = () => {
    this.setState({
      dirty: true,
    });
  }

  render() {
    const { pristine, dirty } = this.state;
    const { value, label, error, errorMessage } = this.props;
    return (
      <div className={classnames('ControlInput ControlCheckbox', {
        [`ControlInput--error`]: dirty && !pristine && error
      })}>
        <input
          type="checkbox"
          checked={value}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        />
        <label>{label}</label>
        {errorMessage && error && !pristine && dirty &&
          <span className="error-message">{errorMessage}</span>
        }
      </div>
    )
  }
}

ControlCheckbox.propTypes = {
  value: T.any.isRequired,
  label: T.string,
  text: T.string,
  onChange: T.func.isRequired,
  error: T.bool,
  errorMessage: T.string,
};

ControlCheckbox.defaultProps = {
  type: 'text',
};

export default ControlCheckbox;
