import React from "react";

export class ClickTracer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lastClicked: "None"
        }
    }

    traceClick = (event) => {
        this.setState({
            lastClicked: event.target.innerText
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.lastClicked}</h1>
        <button onClick={this.traceClick}>A</button>
        <button onClick={this.traceClick}>B</button>
        <button onClick={this.traceClick}>C</button>
      </div>
    );
  }
}
