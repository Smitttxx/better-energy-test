import React from "react";
import "./dist/styles.css";

class SiteWrapper extends React.Component {
  render() {
    return <div className="section-container">{this.props.children}</div>;
  }
}

export default SiteWrapper;
