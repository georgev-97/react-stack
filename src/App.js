import React from "react";
import { TodoList } from "./TodoList";
/**Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
 * The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
 * When the button is clicked, 
 * the event handler should add the value of the input tag to the items array. */
export class App extends React.Component{
    render(){
        return <div>
          <TodoList/>
        </div>
    }
}