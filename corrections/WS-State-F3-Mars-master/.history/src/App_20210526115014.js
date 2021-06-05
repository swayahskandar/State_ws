import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ToDo from "./components/Delete"

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
    render2() {
      return (
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <button onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
          <span>{ this.props.description }</span>
        </li>
      );
    }
  }
  
