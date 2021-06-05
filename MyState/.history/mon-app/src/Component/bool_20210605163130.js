import React, { Component } from 'react'

class ButtonExample extends Component {
    state = { status: false }
  
    render() {
      const { status } = this.state;
      return (
        <button onClick={() => this.setState({ status: !status })}>
          {`Current status: ${status ? 'on' : 'off'}`}
        </button>
        <button onClick={() => this.setState({ change })}>
        {`Current status: ${status ? 'on' : 'off'}`}
      </button>
      );
    }
  }
  export default ButtonExample