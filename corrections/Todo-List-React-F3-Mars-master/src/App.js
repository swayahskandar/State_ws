import React, { Component } from "react";
import AddItem from "./Components/AddItem";
import ListItems from "./Components/ListItems";

export default class App extends Component {
  state = {
    items: [],
  };

  addItem = (x) => {
    this.setState({
      items: [...this.state.items, x],
    });
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((el, i) => el.id !== key),
    });
  };

  done = (id) => {
    this.setState({
      items: this.state.items.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };

  render() {
    return (
      <div>
        <AddItem addItem={this.addItem} />
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          done={this.done}
        />
      </div>
    );
  }
}
