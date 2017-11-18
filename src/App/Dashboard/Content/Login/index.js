import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../Card/';
import LoginForm from './LoginForm.js';
import ForgotPasswordForm from './ForgotPasswordForm.js';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      forgotPassword: false,
    };
  }

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  }

  onLogin = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.onLogin({email, password});
  }

  onForgotPassword = (e) => {
    e.preventDefault();
    const {email} = this.state;
    this.props.onForgotPassword({email});
  }

  toggleForgotPasswordForm = () => (
    this.setState((state) => ({
      forgotPassword: !state.forgotPassword,
    }))
  )

  render() {
    const { submitting, error } = this.props;
    const { email, password, forgotPassword } = this.state;
    const { 
      toggleForgotPasswordForm,
      onLogin,
      onForgotPassword,
      onChange
    } = this;

    return (
      <Card>
    {!forgotPassword 
      ? <LoginForm 
          email={email}
          password={password}
          error={error}
          submitting={submitting}
          onChange={onChange}
          onSubmit={onLogin}
          toggleForgotPasswordForm={toggleForgotPasswordForm}
        />
      : <ForgotPasswordForm
          email={email}
          error={error}
          submitting={submitting}
          onChange={onChange}
          onSubmit={onForgotPassword}
          toggleForgotPasswordForm={toggleForgotPasswordForm}
        />
    }
      </Card>
    );
  }
}

Login.propTypes = {
  onLogin: T.func.isRequired,
  onForgotPassword: T.func.isRequired,
  submitting: T.bool,
  error: T.object,
}

export default Login
