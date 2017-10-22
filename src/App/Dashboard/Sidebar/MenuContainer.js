import get from 'lodash/get';
import {connect} from 'react-redux';
import Menu from './Menu/';

const mapStateToProps = (state) => ({
  isAuthenticated: get(state, 'flags.isAuthenticated'),
  pathname: get(state, 'location.pathname'),
});

const mapActionsToProps = {};

const MenuContainer = connect(mapStateToProps, mapActionsToProps)(Menu);

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer;
