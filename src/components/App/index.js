import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Route} from 'react-router';
import {connect} from 'react-redux';
import Dashboard from '../Dashboard/';
import Spinner from '../common/Spinner/';
import {IS_TOKEN_ACTIVE} from '../../store/actions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.isReady();
  }
  
  render() {
    return (
      <div className="App">
      {this.props.ready === false
        ?
        <Spinner color="black" size="xl"/>
        :
        <Route path="/" component={Dashboard}/>
      }
      </div>
    );
  }
}

App.propTypes = {
  ready: T.bool,
}

const mapStateToProps = (state) => ({
  ready: state.ui.ready,
});

const mapActionsToProps = {
  isReady: () => ({
    type: IS_TOKEN_ACTIVE
  })
};

const AppContainer = connect(mapStateToProps, mapActionsToProps)(App);

AppContainer.displayName = 'AppContainer';

export default AppContainer;
