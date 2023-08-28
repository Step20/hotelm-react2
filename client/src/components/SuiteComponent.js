import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";
import king from "../assets/king.jpg";

export default function Suite() {
  return (
    <div className="suite-out  mx-auto">
      <Container className="suite-content  " id="about">
        <Fade up cascade="true">
          <Row className="up mx-auto">
            <Col xs="12" md="6">
              <h1>
                Cottage that blends<br></br>
                <span className="blue">comfort & elegance</span>
              </h1>
            </Col>
            <Col xs="12" md="6">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </Col>
          </Row>
        </Fade>
        <Fade up cascade="true" duration="2000">
          <Row className="down mt-5 mx-auto">
            <Col xs="12" md="4" className="box text-center">
              <img src={king} />
              <h3>King Suites</h3>
              <p className="mx-auto">
                It is a long established fact that a reader will be distracted
              </p>
            </Col>
            <Col xs="12" md="4" className="box text-center">
              <img src={king} />
              <h3>Premium Suites</h3>
              <p className="mx-auto">
                It is a long established fact that a reader will be distracted
              </p>
            </Col>
            <Col xs="12" md="4" className="box text-center mx-auto">
              <img src={king} />
              <h3>Master Suites</h3>
              <p className="mx-auto">
                It is a long established fact that a reader will be distracted
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
