import React, { Component } from "react";
import AuthService from "../services/AuthService";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      message: null,
    };

    this.service = new AuthService();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.service
      .signup(this.state.email, this.state.password, this.state.username)
      .then((response) => {
        if (response.message) {
          this.setState({ message: response.message });
        } else {
          this.props.getCurrentUser();
          this.props.history.push("/");
        }
      })
      .catch((err) => {
        this.setState({ message: err.response.data.message });
      });
  };

  render() {
    return (
      <div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <br />
        <button onClick={this.handleSubmit}>Sign Up</button>
        <br />
        <br />
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default Signup;
