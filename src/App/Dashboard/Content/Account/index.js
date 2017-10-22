import './styles.css';
import React from 'react';
import T from 'prop-types';
import Card from '../Card/';
import ControlInput from '../../../../common/ControlInput/';
import Button from '../../../../common/Button/';

class Account extends React.Component {
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
    const {user} = this.props;

    return (
      <div className="Account">    

        <Card>
          <h2>Perfil</h2>

          <dt><b>Usuario:</b></dt>
          <dd>{user.username}</dd>

          <dt><b>Email:</b></dt>
          <dd>{user.email}</dd>

          <dt><b>Permisos:</b></dt>
          <dd>
          {user.permissions.length === 0
            ?
            'Sin permisos definidos.'
            :
            <ul>
            {user.permissions.map((permission) => (
              <li>{permission}</li>
            ))}
            </ul>
          }
          </dd>

        </Card>

        <div></div>
  
        <Card>
          <h2>Cambiar contraseña</h2>

          <form onSubmit={this.handleOnSubmit}>
          
            <ControlInput 
              value={this.state.password}
              label="Contraseña actual"
              type="password"
              onChange={this.handleOnChange('password')}
            />

            <ControlInput
              value={this.state.newPassword}
              label="Nueva Contraseña"
              type="password"
              onChange={this.handleOnChange('newPassword')}
            />

            <ControlInput
              value={this.state.repeatNewPassword}
              label="Repetir nueva contraseña"
              type="password"
              onChange={this.handleOnChange('repeatNewPassword')}
            />

            <Button type="submit"
              loading={this.props.submitting}
              disabled={!this.newPasswordIsValid()}>
              Aceptar
            </Button>

          </form>
            
        </Card>
      
      </div>
    );
  }
}

Account.propTypes = {
  user: T.shape({
    email: T.string,
    username: T.string,
    permissions: T.arrayOf(T.string),
  }),
  onSubmit: T.func.isRequired,
};

Account.defaultProps = {
  user: {permissions: []},
};

export default Account
