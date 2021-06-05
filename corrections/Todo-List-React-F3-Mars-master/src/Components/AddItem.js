import React, { Component } from "react";
import { Form, Card, Button, FormControl, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default class AddItem extends Component {
  state = {
    myInput: "",
  };

  handelChange = (e) => {
    this.setState({
      myInput: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.myInput) {
      this.props.addItem({
        text: this.state.myInput,
        id: uuidv4(),
        isDone: false,
      });
      this.setState({ myInput: "" });
    } else {
      alert("mahah");
    }
  };

  render() {
    return (
      <Card bg="primary">
        <Card.Body>
          <h1 className={"text-white"}>To-Do-App !</h1>

          <Form onSubmit={this.add}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={this.handelChange}
                  value={this.state.myInput}
                />
                <InputGroup.Append>
                  <Button variant="success" onClick={this.add}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
