/**Modify the TodoList by adding a "remove" button to each li tag. When clicked,
 * the event handler should remove corresponding item from the items array.*/

import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["a", "b", "c", "d"],
    toAdd: "",
  };

  handleChange = (event) => {
    const item = event.target.value;
    this.setState({
      toAdd: item,
    });
  };

  addItem = () => {
    this.state.items.push(this.state.toAdd);
    this.setState({
      items: this.state.items,
      toAdd: "",
    });
  };

  reset = () => {
    this.setState({
      items: [],
      toAdd: "",
    });
  };

  removeItem = (index) => {
    this.state.items.splice(index, 1);
    this.setState({
      items: this.state.items,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((el, index) => {
            return (
              <li key={el + index}>
                {el}
                <button onClick={() => this.removeItem(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          name="item"
          onChange={this.handleChange}
          value={this.state.toAdd}
        />
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
