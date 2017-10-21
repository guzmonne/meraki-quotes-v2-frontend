import {connect} from 'react-redux';
import Header from './Header/';

const mapStateToProps = (state) => ({
  isAuthenticated: state.flags.isAuthenticated,
});

const mapActionsToProps = {};

const HeaderContainer = connect(mapStateToProps, mapActionsToProps)(Header);

HeaderContainer.displayName = 'HeaderContainer';

export default HeaderContainer;
