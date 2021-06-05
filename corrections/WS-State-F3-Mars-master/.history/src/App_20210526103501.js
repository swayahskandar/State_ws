import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {

    count: 0,
    myInput: "",
     arr: ["bonjour", "3aslema"],
   };

  add = (y) => {
    this.setState({ arr: [...this.state.arr, y] });
  };

  delete = () => {
    this.setState({ arr: [...this.state.arr.delete] });
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
    const {
      name,
      age,
      person: { name1, email },
      count,
    } = this.state;
    return (
      <div className="App">
        
        <Counter add={this.add} />
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }

  render() {
    const {
      name,
      age,
      person: { name1, email },
      count,
    } = this.state;
    return (
      <div className="App">
        
        <Counter delete={this.delete} />
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }
}