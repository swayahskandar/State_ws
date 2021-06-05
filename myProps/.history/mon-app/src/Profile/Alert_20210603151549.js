class Foo extends Component {
    handleClick() {
      console.log('Cliqué');
    }
    render() {
      return <button onClick={this.handleClick.bind(this)}>Cliquez ici</button>;
    }
  }