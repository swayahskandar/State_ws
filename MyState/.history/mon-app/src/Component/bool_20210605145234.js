class ButtonExample extends React.Component {
    state = { status: false }
  
    render() {
      const { status } = this.state;
      return (
        <button onClick={() => this.setState({ status: !status })}>
          {`Current status: ${status ? 'on' : 'off'}`}
        </button>
      );
    }
  }
  export def