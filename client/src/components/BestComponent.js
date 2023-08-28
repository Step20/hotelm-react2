import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";
import king from "../assets/king.jpg";
import { HashLink } from "react-router-hash-link";

export default function Best() {
  return (
    <Fade up cascade="true" duration="1500">
      <div className="best  mx-auto">
        <div className="best-out  mx-auto">
          <Container className="best-content  mx-auto" id="best">
            <Row className="row mx-auto">
              {" "}
              <Col xs="12" md="6" className="left ">
                <img src={king} />
              </Col>
              <Col xs="12" md="6" className="right ">
                <h1>
                  We strived only for<br></br> the Best
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text of the printing and typesetting dummy text
                  of the printing.
                </p>
                <HashLink to="/hotel">
                  <Button className="btn mt-5">Book Now</Button>
                </HashLink>
              </Col>
            </Row>
          </Container>{" "}
        </div>
      </div>{" "}
    </Fade>
  );
}
