import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
      text: "",
    };
  render() {
    return (
      <li>
        {/* <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } /> */}
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        {/* <span>{ this.props.description }</span> */}
      </li>
    );
  }
}
