import React from "react";
import { NavLink } from "react-router-dom";
import "./dist/styles.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/Home"
    >
      Home
    </NavLink>

    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/PlanBenefits"
    >
      Plan Benefits
    </NavLink>

    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/GettingStarted"
    >
      Getting Started
    </NavLink>

    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/EasyActions"
    >
      Easy actions
    </NavLink>

    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/LowCostMeasures"
    >
      Low Cost Measures
    </NavLink>

    <NavLink
      className="navbar__link"
      exact
      activeClassName="navbar__link--active"
      to="/JoinNow"
    >
      Join Now
    </NavLink>
  </nav>
);

export default Navbar;
