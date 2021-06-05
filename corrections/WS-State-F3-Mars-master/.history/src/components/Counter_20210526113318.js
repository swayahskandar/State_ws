import React, { Component } from "react";

export default class D extends Component {
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
        <button className="add" onClick={() => this.props.add(this.state.text)}>ADD</button>
      </div>
    );
  }

}
