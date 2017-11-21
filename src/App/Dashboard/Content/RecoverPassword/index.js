import './styles.css';
import React from 'react';
import T from 'prop-types';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Card from '../Card/';
import ControlInput from '../../../../common/ControlInput/';
import Button from '../../../../common/Button/';

class RecoverPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      passwordConfirmation: '',
    };
  }

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { password } = this.state;
    const { 
      forgotPasswordCode,
      email
    } = queryString.parse(this.props.location.search);
    this.props.onRecoverPassword({ password, forgotPasswordCode, email });
  }

  isInvalid = () => (
    this.state.password === '' ||
    this.state.passwordConfirmation === '' ||
    this.state.password !== this.state.passwordConfirmation
  )

  render() {
    const { submitting } = this.props;
    const { password, passwordConfirmation } = this.state;
    const { onSubmit, onChange, isInvalid } = this;

    return (
      <Card>
        <form className="RecoverPassword" onSubmit={onSubmit}>

          <legend>
            <strong>Recuperar contraseña</strong>
          </legend>

          <ControlInput
            value={password}
            label="Nueva Contraseña"
            type="password"
            onChange={onChange('password')}
          />

          <ControlInput
            value={passwordConfirmation}
            label="Repetir Contraseña"
            type="password"
            onChange={onChange('passwordConfirmation')}
          />

          <Button 
            type="submit" 
            loading={submitting}
            disabled={isInvalid()}
          >
            Aceptar
          </Button>

          <Link to="/login">Iniciar Sesión</Link>

        </form>
      </Card>
    );
  }
}

RecoverPassword.propTypes = {
  submitting: T.bool,
  onRecoverPassword: T.func,
}

export default RecoverPassword
