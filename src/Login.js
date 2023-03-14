import React from "react";
/*
Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked,
 the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.*/
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
    console.log(checked)
    this.setState({
      [name]: value ?? checked
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputs}
          name="username"
          placeholder="Username"
        ></input>
        <input
          type="password"
          onChange={this.handleInputs}
          name="password"
          placeholder="Password"
        ></input>
        <input
          type="checkbox"
          onChange={this.handleInputs}
          name="remember"
        ></input>
        <button onClick={() => this.props.onLogin(this.state)}>Login</button>
      </div>
    );
  }
}
