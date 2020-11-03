import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./dist/styles.css";
import placeholderImg from "./../../images/infoplaceholder.png";

const TabbedMenu = () => {
  return (
    <Tabs defaultActiveKey="start" id="uncontrolled-tab">
      <Tab eventKey="start" title="Start">
        <Row>
          <Col xs={4}>
            <img src={placeholderImg} alt="Logo" />
          </Col>
          <Col xs={8}>test</Col>
        </Row>
      </Tab>
      <Tab eventKey="savings" title="Savings">
        <h1>Savings Tab</h1>
      </Tab>
      <Tab eventKey="home" title="Home">
        <h1>Home Tab</h1>
      </Tab>
      <Tab eventKey="renew" title="Renew">
        <h1>Renew Tab</h1>
      </Tab>
    </Tabs>
  );
};

export default TabbedMenu;
