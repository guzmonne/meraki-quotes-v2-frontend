import {connect} from 'react-redux';
import RecoverPassword from './RecoverPassword/';
import {
  RECOVER_PASSWORD_REQUEST,
} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  submitting: state.flags.recoverPassword,
});

const mapActionsToProps = {
  onRecoverPassword: (body, forgotPasswordCode) => ({
    type: RECOVER_PASSWORD_REQUEST,
    payload: { body, forgotPasswordCode },
  })
};

const RecoverPasswordContainer = (
  connect(mapStateToProps, mapActionsToProps)(RecoverPassword)
);

RecoverPasswordContainer.displayName = 'RecoverPasswordContainer';

export default RecoverPasswordContainer;
