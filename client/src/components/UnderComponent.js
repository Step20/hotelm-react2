import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";
import { HashLink } from "react-router-hash-link";
import king from "../assets/king.jpg";

export default function Under() {
  return (
    <div className="under  mx-auto">
      <Fade up cascade="true" duration="2000">
        <div className="under-out  mx-auto">
          <Container className="under-content  mx-auto">
            <Row className="row mx-auto">
              {" "}
              <Col xs="12" md="6" className="left  ">
                <h1>
                  Find your Home,<br></br> away from Home
                </h1>
                <p className="mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </Col>{" "}
              <Col xs="12" md="6" className="right  ">
                <HashLink to="/hotel">
                  <Button className="btn mt-5 ms-auto my-auto ">
                    Explore Stays
                  </Button>
                </HashLink>
              </Col>
            </Row>
          </Container>{" "}
        </div>{" "}
      </Fade>
    </div>
  );
}
