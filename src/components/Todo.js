import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { completed, text, Click } = this.props;
    return (
      <li
        onClick={Click}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
