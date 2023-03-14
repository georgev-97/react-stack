/**Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable.
 * The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button.
 * When the button is clicked,
 * the event handler should add the value of the input tag to the items array. */

import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["a", "b", "c", "d"],
    toAdd: ""
  };

  handleChange = (event) => {
    const item = event.target.value;
    this.setState({
        toAdd: item
    })
  }

  addItem = () =>{
    this.state.items.push(this.state.toAdd);
    this.setState({
        items: this.state.items,
        toAdd: ""
    })
  }

  render() {
    return (
      <div>
        <ul>
            {this.state.items.map(el =>{
                return <li>{el}</li>
            })}
        </ul>
        <input type="text" name="item" onChange={this.handleChange} value={this.state.toAdd}/>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}
