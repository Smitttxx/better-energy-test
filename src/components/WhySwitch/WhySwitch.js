import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import blueArrow from "./../../images/bluearrow.png";
import greenArrow from "./../../images/greenarrow.png";
import "./dist/styles.css";

class WhySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "Best Overall Energy Supplier",
          desc: " for the 6th consecutive time**",
        },
        {
          title: "Best Value for Money,",
          desc:
            " as awarded by uSwitch, compared to all other major energy suppliers in the UK*",
        },
        {
          title: "Best for Customer Service",
          desc:
            " - No wonder that our customer numbers have gone from 5 million to 9 million customers in just 5 years",
        },
        {
          title: "Lorem ipsum,",
          desc:
            "dolor sit amet, eos porro placerat interpretaris eu, regione fabulas accommodare ei eam.",
        },
        {
          title: "Ea quo esse officiis",
          desc:
            " ,unum philosophia ei eam, has malis accumsan salutandi ad. No reque deserunt atomorum eos, per cu wisi tollit.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="whySwitch">
        <h6>
          <b>Why switch to Better Energy</b>
        </h6>
        <p>
          Get piece of mind knowing you've chosen the right company to supply
          your energy. Here's why...
        </p>
        {this.state.items.map((item) => (
          <Fragment>
            <span>
              <img src={blueArrow} alt="bluearrow" /> <b>{item.title}</b>
              {item.desc}
            </span>
          </Fragment>
        ))}
        <Link to="/gettingStarted">
          <a className="primary-button-with-arrow">
            <img src={greenArrow} alt="bluearrow" /> Join now
          </a>
        </Link>
      </div>
    );
  }
}

export default WhySwitch;
