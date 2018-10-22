// eslint-disable-next-line
import React, { Component } from "react";
//stateles functional component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#c">
        NavBar
        <span className="badge badge-pill badge-secondary m-2">
          {props.counterTotal}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
