import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <span>logo</span>
        <span>sign in</span>
        <span>Register</span>
        <span>logout</span>
      </div>
    );
  }
}

export default Header;
