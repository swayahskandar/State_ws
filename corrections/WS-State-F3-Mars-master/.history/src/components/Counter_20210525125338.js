import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        {/* <h2>{this.props.x}</h2> */}
        {/* <input
          type="text"
          onChange={(e) => this.props.change(e.target.value)}
        /> */}

        <input
          type="text"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.add(this.state.text)}>ADD</button>
      </div>
    );
  }
}
