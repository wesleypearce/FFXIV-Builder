import React, { Component } from 'react';
import SearchBar from './SearchBar'
import '../App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar term='Bronze' />
      </React.Fragment>
    );
  }
}

export default App;
