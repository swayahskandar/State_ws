import React, { Component } from "react";

export default class Delete extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ text: e.target.text })}
        />
        <button className="delete" onClick={() => this.props.deletes(this.state.text.rem)}>DELETE</button>
      </div>
    );
  }

}