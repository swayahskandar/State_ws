import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import ClassBasedForm from './components/ClassBasedForm'
// import Logo from './assets/alligator-logo2.svg'
import './App.css'
import MyFunctionComponent from "./src/components/Counter";
// import Counter from "./components/Counter";
const [person, setperson] = useState({fullName : '',bio : '',profession :''})
const [shows, setshows] = useState(false)
class App extends Component {
    
  }
  render() {
    return (
     
      <div className="App">
       <h1>{person.}</h1>
        
      </div>
    )
  }
}

export default App
