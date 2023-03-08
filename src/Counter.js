import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + this.props.amount };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCounter}>+</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
  interval: 1000,
  amount: 1,
};
export default Counter;
