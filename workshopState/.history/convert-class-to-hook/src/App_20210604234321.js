import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import ClassBasedForm from './components/ClassBasedForm'
// import Logo from './assets/alligator-logo2.svg'
import './App.css'
import MyFunctionComponent from "./src/components/Counter";
// import Counter from "./components/Counter";
const [fullName, setfullName] = useState('Skandar swayah')
const [bio, setbio] = useState('ingénieur génie électrique')
const [prefession, setprefession] = useState('web developer')
const
class App extends Component {
    
  }
  render() {
    return (
     
      <div className="App">
       
        <MyFunctionComponent />
      </div>
    )
  }
}

export default App
