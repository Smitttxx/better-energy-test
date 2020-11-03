import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomepageLeftCol from "../../components/HomepageLeftCol/HomepageLeftCol";
import HomepageRightCol from "../../components/HomepageRightCol/HomepageRightCol";
import "./styles.css";
import Tcandcs from "../../components/tsandcs/tcandcs";

function Home() {
  return (
    <Fragment>
      <Row>
        <Col md={8}>
          <HomepageLeftCol />
        </Col>
        <Col>
          <HomepageRightCol />
        </Col>
      </Row>
      <Tcandcs />
    </Fragment>
  );
}

export default Home;
