import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.add(this.state.text)}>ADD</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.delete(this.state.text)}>ADD</button>
      </div>
    );
  }
}
