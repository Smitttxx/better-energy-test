import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TabbedMenu from "../TabbedMenu/TabbedMenu";
import banner from "./../../images/banner.png";

const HomepageLeftCol = () => {
  return (
    <Fragment>
      <Link to="/GettingStarted">
        <img src={banner} alt="Logo" />
      </Link>
      <h6>
        <b>Get rewarded for saving energy with Better Energy</b>
      </h6>
      <p>
        Take control of your gas and electricity - we make lowering your dual
        fuel or electricity bills easy, with helpful energy saving tools and
        advice, as well as giving you over £100 worth of rewards, and a FREE
        energy monitor wirth £45.
      </p>
      <TabbedMenu />
    </Fragment>
  );
};

export default HomepageLeftCol;
