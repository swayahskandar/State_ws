import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     name:"Nader",
  //     age:50
  //   }
  // }

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
        {/* <h3>{this.state.name}</h3>
        <p>{this.state.age}</p> */}
        {/* <h3>{name}</h3>
        <p>{age}</p>
        <p>{name1}</p>
        <p>{email}</p> */}

        {/* <Counter x={count} /> */}
        {/* <button onClick={this.increment}>+</button> */}
        {/* <h2>{count}</h2> */}
        {/* <button onClick={this.decrement} >-</button> */}

        {/* <Counter change={this.handelChange} />
        <h2>{this.state.myInput}</h2> */}

        <Counter add={this.add} />
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }
}
