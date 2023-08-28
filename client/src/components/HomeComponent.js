import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";
import NavPage from "../components/NavComponent";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <>
      <div className="home-out">
        <Fade down duration="2000">
          <NavPage />{" "}
        </Fade>
        <Fade up cascade="true">
          <Container className="home-content" id="home">
            <Row className="home-text">
              <Col xs="12" sm="12" className="text-left">
                <h1>
                  Stay once, <br></br>
                  carry memories<br></br>
                  Forever.
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using lorem ipsum is that.
                </p>
                <HashLink to="/hotel">
                  <Button className="btn mt-4">Explore Stays</Button>{" "}
                </HashLink>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>{" "}
      <ScrollToTop
        className="scroll"
        color="white"
        smooth
        width="35"
        height="35"
      />
    </>
  );
}
