import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import ClassBasedForm from './components/ClassBasedForm'
// import Logo from './assets/alligator-logo2.svg'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
        personne :{
          fullName : ['Skandar swayah'],
          bio : 'ingenieur génie electrique',
          profession : 'web developer'
        },
       shows : false
    }
  }
  change (){
this.setState({
    shows : true
}
)
  }
  render() {
    return (
      <div className="App">
       <h1>{this.state.personne.}</h1>
       <button onClick={()=>{this.change()}}>click</button>
      </div>
    )
  }
}

export default App
