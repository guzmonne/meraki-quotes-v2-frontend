import React from 'react';
import T from 'prop-types';
import isFunction from 'lodash/isFunction';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.data
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({...newProps.data});
  }

  handleOnSubmit = (fn) => (e) => {
    e.preventDefault();

    if (!isFunction(fn)) return;

    return fn(this.state);
  }

  handleOnChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  }

  render() {
    const {children} = this.props;
    const {handleOnChange, handleOnSubmit} = this;
    
    return children({
      data: this.state,
      handleOnChange,
      handleOnSubmit
    });
  }
}

Form.propTypes = {
  data: T.object,
  children: T.func,
}

export default Form;
