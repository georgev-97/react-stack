import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/notfound">404</Link>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    );
  }
}
