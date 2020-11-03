import React from "react";
import "./dist/styles.css";

const EmailSignUp = () => {
  return (
    <div className="container-green-gradient">
      <h6>
        The latest from <b>Better Energy</b>
      </h6>
      <p>
        Sign-up to our <b>email</b> newsletter to receive all the latest product
        news, updates and offors...
      </p>
      <form>
        <input
          type="text"
          name="email"
          className="input-text"
          placeholder="Enter your email address"
        />
        <input type="submit" value="Sign up" className="primary-button" />
      </form>
    </div>
  );
};

export default EmailSignUp;
