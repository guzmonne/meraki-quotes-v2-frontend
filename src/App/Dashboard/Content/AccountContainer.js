import get from 'lodash/get';
import {connect} from 'react-redux';
import Account from './Account/';

const mapStateToProps = (state) => ({
  user: get(state, 'ui.user'),
});

const mapActionsToProps = {

};

const AccountContainer = connect(mapStateToProps, mapActionsToProps)(Account);

AccountContainer.displayName = 'AccountContainer';

export default AccountContainer;
