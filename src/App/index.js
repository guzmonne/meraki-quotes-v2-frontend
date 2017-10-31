import './reboot.css';
import './styles.css';
import React from 'react';
import T from 'prop-types';
import {Route} from '../ListeningRouter/';
import {connect} from 'react-redux';
import Dashboard from './Dashboard/';
import Spinner from '../common/Spinner/';
import {VALIDATE_TOKEN} from '../store/actions.js';

class App extends React.Component {
  componentDidMount() {
    this.props.isReady();
  }
  
  render() {
    return (
      <div className="App">
      {this.props.ready === false
        ?
        <Route path="/" component={Dashboard}/>
        :
        <Spinner color="black" size="xl"/>
      }
      </div>
    );
  }
}

App.propTypes = {
  ready: T.bool,
}

const mapStateToProps = (state) => ({
  ready: state.flags.ready,
});

const mapActionsToProps = {
  isReady: () => ({
    type: VALIDATE_TOKEN
  })
};

const AppContainer = connect(mapStateToProps, mapActionsToProps)(App);

AppContainer.displayName = 'AppContainer';

export default AppContainer;
