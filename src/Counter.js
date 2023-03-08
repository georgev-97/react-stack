import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this._interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.amount,
      }));
    },this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

Counter.defaultProps = {
    count: 0,
    interval: 1000,
    amount: 1
}
export default Counter;
