import get from 'lodash/get';
import {connect} from 'react-redux';
import ChangePasswordForm from './ChangePasswordForm/';
import {API_CALL} from '../../../../store/actions.js';

const mapStateToProps = (state) => ({
  errors: get(state, 'ui.changepasswordApiCall.error'),
  submitting: get(state, 'flags.changepasswordApiCall'),
});

const mapActionsToProps = {
  onSubmit: (body) => ({
    type: API_CALL,
    payload: {
      endpoint: '/users/changePassword',
      method: 'POST',
      body: body,
      target: 'changePassword',
    }
  })
};

const ChangePasswordFormContainer = (
  connect(mapStateToProps, mapActionsToProps)(ChangePasswordForm)
);

ChangePasswordFormContainer.displayName = 'ChangePasswordFormContainer';

export default ChangePasswordFormContainer;
