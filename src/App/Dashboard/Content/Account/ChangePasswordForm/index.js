import './styles.css';
import React from 'react';
import T from 'prop-types';
import get from 'lodash/get';
import Card from '../../Card/';
import ControlInput from '../../../../../common/ControlInput/';
import Button from '../../../../../common/Button/';

class ChangePasswordForm extends React.Component {
  state = {
    password: '',
    newPassword: '',
    repeatNewPassword:'',
  }

  newPasswordIsValid = () => (
    this.state.password !== '' &&
    this.state.newPassword !== '' &&
    this.state.repeatNewPassword !== '' &&
    this.state.newPassword === this.state.repeatNewPassword
  )

  handleOnChange = (key) => (e) => this.setState({
    [key]: e.target.value
  })

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (!this.newPasswordIsValid()) return;
    const {password, newPassword} = this.state;
    this.props.onSubmit({password, newPassword});
  }

  render() {
    const {errors} = this.props;

    return (
      <Card className="ChangePasswordForm">
        <h2>Cambiar contraseña</h2>

        <form onSubmit={this.handleOnSubmit}>
        
          <ControlInput 
            value={this.state.password}
            label="Contraseña actual"
            type="password"
            error={get(errors, 'details[0].path[0]') === 'password'}
            errorMessage={get(errors, 'details[0].message')}
            onChange={this.handleOnChange('password')}
          />

          <ControlInput
            value={this.state.newPassword}
            label="Nueva Contraseña"
            type="password"
            error={get(errors, 'details[0].path[0]') === 'newPassword'}
            errorMessage={get(errors, 'details[0].message')}
            onChange={this.handleOnChange('newPassword')}
          />

          <ControlInput
            value={this.state.repeatNewPassword}
            label="Repetir nueva contraseña"
            type="password"
            error={this.state.repeatNewPassword !== this.state.newPassword}
            errorMessage={'Las contraseñas no coinciden.'}
            onChange={this.handleOnChange('repeatNewPassword')}
          />

          <Button type="submit"
            loading={this.props.submitting}
            disabled={!this.newPasswordIsValid()}>
            Aceptar
          </Button>

        </form>
          
      </Card>
    )
  }
}

ChangePasswordForm.propTypes = {
  errors: T.object,
  onSubmit: T.func.isRequired,
}

ChangePasswordForm.defaultProps = {
  name: 'ValidationError',
  details: [
    {
      message: '"password" length must be at least 8 characters long',
      path: [
        'password'
      ],
      value: '1'
    }
  ]
}

export default ChangePasswordForm
