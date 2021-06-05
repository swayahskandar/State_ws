import React, { Component } from "react";

export default class Dele extends Component {
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
        <button className="delete" onClick={() => this.props.deletes(this.state.text)}>DELETE</button>
      </div>
    );
  }

}