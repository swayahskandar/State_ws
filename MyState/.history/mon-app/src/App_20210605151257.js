// import logo from './logo.svg';
import './App.css';
// import IfElseState from './Component/IfElseState';
// import ButtonExample from './Component/bool'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        person :{name:'',bio:'',prof:''},
         isLoggedIn : true
    }
}
  changes(){
    this.setState({
      person :{name:'skandar',bio:'ing',prof:''}
    })
  }
  render() {
    return this.state.isLoggedIn && <div>{changes()}</div>
  }
}

export default App
