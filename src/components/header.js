import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="#">portrait gallery</a>
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
