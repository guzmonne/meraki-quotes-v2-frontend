import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import ControlInput from '../../../../common/ControlInput/';
import Button from '../../../../common/Button/';

const LoginForms = ({
  email,
  password,
  error,
  submitting,
  onChange,
  onSubmit,
  toggleForgotPasswordForm
}) => (
  <form className="Login" onSubmit={onSubmit}>

    <legend>
      <strong>Iniciar sesión</strong>
    </legend>

    <ControlInput
      value={email}
      label="Email"
      type="text"
      error={
        get(error, 'name') === 'UserDoesNotExists' ||
        get(error, 'details.0.path.0') === 'email'
      }
      errorMessage='No existe una cuenta con este correo.'
      onChange={onChange('email')}
    />

    <ControlInput
      value={password}
      label="Contraseña"
      type="password"
      error={get(error, 'details.0.path.0') === 'password'}
      errorMessage='Contraseña incorrecta.'
      onChange={onChange('password')}
    />

    <Button type="submit" loading={submitting}>
      Aceptar
    </Button>

    <a onClick={toggleForgotPasswordForm}>
      ¿Olvido su contraseña?
    </a>

  </form>
);

LoginForms.propTypes = {
  email: T.string,
  password: T.string,
  error: T.object,
  submitting: T.bool,
  onChange: T.func,
  onSubmit: T.func,
  toggleForgotPasswordForm: T.func,
};

export default LoginForms;
