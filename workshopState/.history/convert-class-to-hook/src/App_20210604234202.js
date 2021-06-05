import React, { Component } from 'react'
// import { Container } from 'reactstrap'
// import ClassBasedForm from './components/ClassBasedForm'
// import Logo from './assets/alligator-logo2.svg'
import './App.css'
import MyFunctionComponent from "./src/components/Counter";
// import Counter from "./components/Counter";
const [fullName, setfullName] = useState('Skandar swayah')
const [bio, setbio] = useState('ingénieur génie électrique')

class App extends Component {
    add = (y) => {
      this.setState({ arr: [...this.state.arr, y] });
    };

  change (){
    
this.setState({
  shows : 'true'

}
)
  }
  render() {
    return (
     
      <div className="App">
         {/* < add={this.add} /> */}
       {/* <h1>{this.state.shows}</h1> */}
       {/* <button onClick={()=>{this.change()}}>click</button>
       {this.state.personne.map((el) => (
          <h2>{el}</h2>
        ))} */}
        <MyFunctionComponent />
      </div>
    )
  }
}

export default App
