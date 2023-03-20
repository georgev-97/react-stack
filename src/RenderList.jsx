/**Modify the TodoList by adding a "remove" button to each li tag. When clicked,
 * the event handler should remove corresponding item from the items array.*/

import React from "react";

export class RenderList extends React.Component {
  state = {
    items: this.props.items,
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
        {this.props.render(this.state.items, this.removeItem)}
      </div>
    );
  }
}
