import {connect} from 'react-redux';
import Login from './Login/';
import {AUTH} from '../../../middlewares/auth.js';

const mapStateToProps = (state) => ({});
const mapActionsToProps = {
  onSubmit: (body) => ({
    type: AUTH,
    AUTH: { body },
  })
};

const LoginContainer = connect(mapStateToProps, mapActionsToProps)(Login);

LoginContainer.displayName = 'LoginContainer';

export default LoginContainer;
