import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav>
          <ul className="nav nav-pills pull-right">
            <li href="/"><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default App;
