import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {

   state = {
    count: 0,
    myInput: "",
     arr: ["bonjour", "3aslema"],
     
   };

  add = (y) => {
    this.setState({ arr: [...this.state.arr, y] });
  };

  deletes = () => {
    this.setState({[] });
  };

  handelChange = (x) => {
    this.setState({ myInput: x });
  };

  render() {
    return (
      <div className="App">
        
        <Counter add={this.add} />
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }

  render1() {
    return (
      <div className="App1">
        
        <Counter deletes={this.deletes} />
        {this.state.arr.map((el) => (
          <h2>{el.delete}</h2>
        ))}
      </div>
    );
  }

}
