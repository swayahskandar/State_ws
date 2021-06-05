import React, { Component } from 'react'

class ButtonExample extends Component {
    state = { status: false }
  
    render() {
      const { status } = this.state;
      return (<div>
        <button onClick={() => this.setState({ status: !status })}>
          {`Current status: ${status ? 'on' : 'off'}`}
        </button>

        <button onClick={() => this.setState({ changeImage() })}>
          click
      </button>
      </div>
      );
    }
  }
  export default ButtonExample