import React from "react";
/**Add a "reset" button to the Login component that clears the content of all three inputs when clicked. */
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputs = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    let name = event.target.name;
    console.log(checked);
    this.setState({
      [name]: value ?? checked,
    });
  };

  resetInput = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputs}
          value = {this.state.username}
          name="username"
          placeholder="Username"
        ></input>
        <input
          type="password"
          onChange={this.handleInputs}
          value = {this.state.password}
          name="password"
          placeholder="Password"
        ></input>
        <input
          type="checkbox"
          onChange={this.handleInputs}
          name="remember"
          checked={this.state.remember}
        ></input>
        <button onClick={() => this.props.onLogin(this.state)}>Login</button>
        <button onClick={this.resetInput}>Reset</button>
      </div>
    );
  }
}
