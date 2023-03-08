import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this._interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
