import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Helmet title="You Are Doing Great" />
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is my website! Under construction!
        </p>
      </div>
    );
  }
}

export default App;
