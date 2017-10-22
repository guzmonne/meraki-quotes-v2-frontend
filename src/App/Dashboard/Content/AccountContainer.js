import get from 'lodash/get';
import {connect} from 'react-redux';
import Account from './Account/';
import {API_CALL} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  user: get(state, 'ui.user'),
  submitting: get(state, 'flags.changePasswordRequest'),
});

const mapActionsToProps = {
  onSubmit: (body) => ({
    type: API_CALL,
    payload: {
      endpoint: '/users/changePassword',
      method: 'POST',
      body: body,
    }
  })
};

const AccountContainer = connect(mapStateToProps, mapActionsToProps)(Account);

AccountContainer.displayName = 'AccountContainer';

export default AccountContainer;
