import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from './Card/';
import ControlInput from './ControlInput/';
import Button from './Button/';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.onSubmit({email, password});
  }

  render() {
    return (
      <Card>

        <form className="Login" onSubmit={this.onSubmit}>

          <legend>
            <strong>Iniciar sesión</strong>
          </legend>
        
          <ControlInput 
            value={this.state.email}
            label="Email"
            type="text"
            onChange={this.onChange('email')}
          />

          <ControlInput
            value={this.state.password}
            label="Contraseña"
            type="password"
            onChange={this.onChange('password')}
          />

          <Button type="submit" loading={this.props.submitting}>
            Aceptar
          </Button>

        </form>
      
      </Card>
    );
  }
}

Login.propTypes = {
  onSubmit: T.func.isRequired,
  submitting: T.bool,
}

export default Login
