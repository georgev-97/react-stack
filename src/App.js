import React from "react";
import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

// Create a Login component containing three inputs: 
// a username input, a password input and a remember checkbox. All three inputs should be controlled components.