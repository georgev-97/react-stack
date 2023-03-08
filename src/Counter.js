import React from "react";
import { CounterDisplay } from "./CounterDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.amount,
      }));
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  count: 0,
  interval: 1000,
  amount: 1,
};
export default Counter;
