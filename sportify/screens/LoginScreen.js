import React, { Component } from "react";
import FacebookLogin from "../components/FacebookLogin";

class LoginScreen extends Component {
  redirect = props => {
    this.props.navigation.navigate(props);
  };

  render() {
    return <FacebookLogin onLogin={this.redirect} />;
  }
}

export default LoginScreen;
