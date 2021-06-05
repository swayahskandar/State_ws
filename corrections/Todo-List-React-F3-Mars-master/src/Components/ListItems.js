import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ListItems = (props) => {
  return (
    <ListGroup>
      {props.items.map((el, index) => (
        <ListGroup.Item
          style={{ display: "flex", alignItems: "flex-end" }}
          key={el.id}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <Button
              variant="outline-secondary"
              onClick={() => props.done(el.id)}
            >
              {el.isDone ? "unDone" : "isDone"}
            </Button>
            <Button variant="danger" onClick={() => props.deleteItem(el.id)}>
              Delete
            </Button>
          </div>
          <p
            style={{
              margin: "0px",
              textDecoration: el.isDone ? "line-through" : "none",
            }}
          >
            {el.text}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItems;
