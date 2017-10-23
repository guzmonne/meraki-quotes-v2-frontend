import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import Card from '../Card/';
import ControlInput from '../../../../common/ControlInput/';
import Button from '../../../../common/Button/';

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
    const {error} = this.props;

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
            error={
              get(error, 'name') === 'UserDoesNotExists' ||
              get(error, 'details.0.path.0') === 'email'
            }
            errorMessage='No existe una cuenta con este correo.'
            onChange={this.onChange('email')}
          />

          <ControlInput
            value={this.state.password}
            label="Contraseña"
            type="password"
            error={get(error, 'details.0.path.0') === 'password'}
            errorMessage='Contraseña incorrecta.'
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
  error: T.object,
}

export default Login
