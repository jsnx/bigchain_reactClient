import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>bigchain DB Frontend</h2>
        </div>
        <p className="App-intro">
          Things to do:
          <ul>
            <li>ingegrate bigchainDB JS API with <code>npm install bigchaindb-driver</code></li>
            <li>Create example transaction described here:<a href="https://github.com/bigchaindb/js-bigchaindb-driver">Example Transaction</a></li>
            <li>let user enter an ID (maybe iD-Card numer) and store it in db</li>
            <li>make it readable from db</li>
            <li>add user authentication with password and username</li>
            <li>allow user to change or revoke the user id</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
