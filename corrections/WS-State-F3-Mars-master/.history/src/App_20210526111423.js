import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {

   state = {
    name: "Nader",
    age: 50,
    person: {
      name1: "Skander",
    email: "skan@gmail.com",
    },
    count: 0,
    myInput: "",
     arr: ["bonjour", "3aslema"],
     
   };

  add = (y) => {
    this.setState({ arr: [...this.state.arr, y] });
  };

  deletes = () => {
    this.setState({ arr: this.state.delete });
  };

  handelChange = (x) => {
    this.setState({ myInput: x });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
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
          <h2>{el}</h2>
        ))}
      </div>
    );
  }

}
