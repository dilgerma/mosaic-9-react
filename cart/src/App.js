import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart'
import {Eev} from 'eev'

class App extends Component {

  render() {
    return (
      <Cart eev={window.eev}></Cart>
    );
  }

  componentWillMount(){
    if(!window.eev) {
      window.eev = new Eev();
    }
  }
}

export default App;
