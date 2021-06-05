class Foo extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log('Cliqué');
    }
    render() {
      return <button onClick={this.handleClick}>Cliquez ici</button>;
    }
  }
  