import get from 'lodash/get';
import {connect} from 'react-redux';
import Menu from './Menu/';
import {UPDATE_UI} from '../../../store/actions.js';

const mapStateToProps = (state) => ({
  isAuthenticated: get(state, 'flags.isAuthenticated'),
  item: get(state, 'ui.menu.item'),
  subItem: get(state, 'ui.menu.subItem'),
});

const mapActionsToProps = {
  navigateToItem: (item) => ({
    type: UPDATE_UI,
    payload: {
      menu: {
        item,
        subItem: '',
      }
    }
  }),
  navigateToSubItem: (subItem) => ({
    type: UPDATE_UI,
    payload: {
      menu: {
        subItem
      }
    }
  })
};

const MenuContainer = connect(mapStateToProps, mapActionsToProps)(Menu);

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer;
