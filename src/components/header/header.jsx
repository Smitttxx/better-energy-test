import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from './../../images/logo.png';  
import "./dist/styles.css";
import Navbar from "../navBar/navBar";

class Header extends Component { 
  render() {
    return (
      <Fragment>
          <NavLink className="nav-brand" to="/">
              <img src={logo} alt="Logo" />
              </NavLink>
          <Navbar />
      </Fragment>
    );
  }
}

export default withRouter(Header);
