import React, { Fragment } from "react";
import EmailSignUp from "../EmailSignup/EmailSignUp";
import WhySwitch from "../WhySwitch/WhySwitch";

const HomepageRightCol = () => {
  return (
    <Fragment>
      <EmailSignUp />
      <WhySwitch />
    </Fragment>
  );
};

export default HomepageRightCol;
