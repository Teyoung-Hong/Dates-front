import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header__app-name">Dates</div>
        <ul className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/users">users</Link>
        </ul>
      </div>
    );
  }
}

export default Header;

<div className></div>;
