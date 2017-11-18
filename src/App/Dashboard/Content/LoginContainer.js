import {connect} from 'react-redux';
import get from 'lodash/get';
import Login from './Login/';
import {
  LOGIN_REQUEST,
  FORGOT_PASSWORD,
} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  submitting: state.flags.login,
  error: get(state, 'ui.login.error'),
});

const mapActionsToProps = {
  onForgotPassword: (body) => ({
    type: FORGOT_PASSWORD,
    payload: { body },
  }),
  onLogin: (body) => ({
    type: LOGIN_REQUEST,
    payload: { body },
  })
};

const LoginContainer = connect(mapStateToProps, mapActionsToProps)(Login);

LoginContainer.displayName = 'LoginContainer';

export default LoginContainer;
