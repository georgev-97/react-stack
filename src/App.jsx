import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Link to="/counter">Counter</Link>}/>
        <Route path="/counter" element={<Counter initialValue={0} />} />
      </Routes>
    );
  }
}
