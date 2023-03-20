import React, { Component } from "react";

export class Container extends Component {
  render() {
    return (
      <div className="bg-white border border-red-500">
        <h1 className="font-extrabold text-red-500">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
