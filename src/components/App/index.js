import './styles.css';
import React from 'react';
import {Route} from 'react-router';
import Dashboard from '../Dashboard/';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Dashboard}/>
      </div>
    );
  }
}

export default App;
