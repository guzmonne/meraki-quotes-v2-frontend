import {connect} from 'react-redux';
import Content from './Content/';

const mapStateToProps = (state) => ({
  isAuthenticated: state.flags.isAuthenticated,
});

const mapActionsToProps = {};

const ContentContainer = connect(mapStateToProps, mapActionsToProps)(Content);

ContentContainer.displayName = 'ContentContainer';

export default ContentContainer;
