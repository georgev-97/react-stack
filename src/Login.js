import React, { createRef } from "react";
/**Modify the UncontrolledLogin component so that the username input is automatically 
 * focused when the component renders the first time.*/
export class Login extends React.Component {
  _formRef = createRef();
  state = {
    username: "",
    password: "",
    remember: false,
  };

  login = (event) => {
    event.preventDefault();
    const { username, password, remember } = event.target.elements;
    this.setState({
      username: username.value,
      password: password.value,
      remember: remember.checked,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount(){
    this._formRef.current.elements.username.focus();
  }

  reset = (event) => {
    this._formRef.current.elements.username.value = "";
    this._formRef.current.elements.password.value = "";
    this._formRef.current.elements.remember.checked = false;
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <form ref={this._formRef} onSubmit={this.login}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button type="sumbit">Login</button>
        <button onClick={this.reset} type="button">
          Reset
        </button>
      </form>
    );
  }
}
