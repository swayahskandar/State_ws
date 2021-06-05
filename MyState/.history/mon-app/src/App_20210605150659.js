// import logo from './logo.svg';
import './App.css';
import IfElseState from './Component/IfElseState';
import ButtonExample from './Component/bool'

import React, { Component } from 'react'

export class App extends Component {
  
  render() {
    return (
      <div>
        <IfElseState />
        <ButtonExample />
      </div>
    )
  }
}

export default App
