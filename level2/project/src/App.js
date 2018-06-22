import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> hello </h1>
        <Toggle>
          <h1>fuck</h1>
        </Toggle>
      </div>
    );
  }
}

export default App;
