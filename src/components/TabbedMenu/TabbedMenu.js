import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dist/styles.css";
import placeholderImg from "./../../images/infoplaceholder.png";
import greenArrow from "./../../images/greenarrow.png";
import goIcon from "./../../images/go_icon.png";
import savingsIcon from "./../../images/pig_icon.png";
import homeIcon from "./../../images/house_icon.png";
import renewIcon from "./../../images/renew_icon.png";

const TabbedMenu = () => {
  return (
    <Tabs defaultActiveKey="start" id="uncontrolled-tab">
      <Tab
        eventKey="start"
        title={
          <span>
            <img src={goIcon} className="image-list-style" alt="Logo" /> Start
          </span>
        }
      >
        <Row>
          <Col md={4}>
            <img src={placeholderImg} className="image-100" alt="Logo" />
          </Col>
          <Col md={8}>
            <ul>
              <li>
                <img src={greenArrow} className="image-list-style" alt="Logo" />{" "}
                We pay you cash for credit rewards for using less energy
              </li>
              <li>
                <img src={greenArrow} className="image-list-style" alt="Logo" />{" "}
                Free energy monitor worth £45
              </li>
              <li>
                <img src={greenArrow} className="image-list-style" alt="Logo" />{" "}
                Reduce your energy usage by 20% - save £228 and get £25 reward*
              </li>
              <li>
                <img src={greenArrow} className="image-list-style" alt="Logo" />{" "}
                Choose paperless billing - £10 reward
              </li>
              <li>
                <img src={greenArrow} className="image-list-style" alt="Logo" />{" "}
                Replace your old boiler - £20 reward
              </li>
            </ul>
          </Col>
        </Row>
      </Tab>
      <Tab
        eventKey="savings"
        title={
          <span>
            <img src={savingsIcon} className="image-list-style" alt="Logo" />{" "}
            Savings
          </span>
        }
      >
        <h1>Savings Tab</h1>
      </Tab>
      <Tab
        eventKey="home"
        title={
          <span>
            <img src={homeIcon} className="image-list-style" alt="Logo" /> Home
          </span>
        }
      >
        <h1>Home Tab</h1>
      </Tab>
      <Tab
        eventKey="renew"
        title={
          <span>
            <img src={renewIcon} className="image-list-style" alt="Logo" />{" "}
            Renew
          </span>
        }
      >
        <h1>Renew Tab</h1>
      </Tab>
    </Tabs>
  );
};

export default TabbedMenu;
