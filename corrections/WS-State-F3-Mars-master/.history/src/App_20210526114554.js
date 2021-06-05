import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Delete from "./components/Delete"

export default class App extends Component {

   state = {
    myInput: "",
     arr: ["Hello"],
     
   };

  add = (y) => {
    this.setState({ arr: [...this.state.arr, y] });
  };

  deletes = () => {
    this.setState({ arr:[] });
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

     this.state = {
      todos: [
        { id: 1, description: 'Walk the cat', isCompleted: true },
        { id: 2, description: 'Throw the dishes away', isCompleted: false },
        { id: 3, description: 'Buy new dishes', isCompleted: false}
      ],
      newTodoDescription: ''
    };

}
