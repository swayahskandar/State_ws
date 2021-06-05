import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Delete from "./components"

export default class App extends Component {

   state = {
    myInput: "",
     arr: ["Hello"],
     
   };

  add = (y) => {
    this.setState({ arr: [...this.state.arr, y] });
  };

  deletes = () => {
    this.setState({ arr: [""] });
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
      <div className="App">
        <Counter deletes={this.deletes} />
        ))}
      </div>
    );
  }

}
