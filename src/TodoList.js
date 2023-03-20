/**Modify the TodoList by adding a "remove" button to each li tag. When clicked,
 * the event handler should remove corresponding item from the items array.*/

import React from "react";
import { RenderList } from "./RenderList";

export class TodoList extends React.Component {
  state = {
    items: ["a", "b", "c", "d"],
  };
 

  render() {
    return (
      <div>
        <RenderList items={this.state.items} render={
          (items, remove) => {
            return (
              <div>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item}
                      <button onClick={() => remove(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        }/>
      </div>
    );
  }
}
