import {connect} from 'react-redux';
import Sidebar from './Sidebar/';

const mapStateToProps = (state) => ({
  isAuthenticated: state.flags.isAuthenticated,
});

const mapActionsToProps = {};

const SidebarContainer = connect(mapStateToProps, mapActionsToProps)(Sidebar);

SidebarContainer.displayName = 'SidebarContainer';

export default SidebarContainer;
