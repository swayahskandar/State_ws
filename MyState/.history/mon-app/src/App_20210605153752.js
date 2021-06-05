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
         isLoggedIn : false
    }
}
  // changes(){
  //   this.setState({
  //     person :{name:'skandar',bio:'ing',prof:'dev'}
      
  //   })
    // console.log(this.state.person)
  // }
  add = (this) => {
    this.setState({ arr: [...this.state.arr, y] });
  };
  render() {
    return this.state.isLoggedIn && <div>{()=>this.changes()}</div>
    
  }
}

export default App
