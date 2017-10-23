import {connect} from 'react-redux';
import get from 'lodash/get';
import Login from './Login/';
import {LOGIN_REQUEST} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  submitting: state.flags.login,
  error: get(state, 'ui.login.error'),
});

const mapActionsToProps = {
  onSubmit: (body) => ({
    type: LOGIN_REQUEST,
    payload: { body },
  })
};

const LoginContainer = connect(mapStateToProps, mapActionsToProps)(Login);

LoginContainer.displayName = 'LoginContainer';

export default LoginContainer;
