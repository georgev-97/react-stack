import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome name={<strong>Maria</strong>} age={26} />}/>
      </Routes>
    );
  }
}
