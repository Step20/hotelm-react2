import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

export default function footer() {
  return (
    <div className="footer-out">
      {" "}
      <Fade up>
        <Container className="footer-group mx-auto" id="footer">
          <div className="footer-b">
            <Row className="footer-content  ">
              <Col className="footer-brand my-auto   ">
                <h1>
                  {" "}
                  Hotel<span className="light">Mahi</span>
                </h1>
              </Col>
              <Col className="footer-text  my-auto   ">
                <ul>
                  <li href="/">Home</li>
                  <li href="/">About</li>
                  <li href="/">Services</li>
                  <li href="/">Pricing</li>
                  <li href="/">Contact</li>
                </ul>
              </Col>
              <Col className="footer-icons  my-auto  ">
                <ul>
                  <li>
                    <AiOutlineGoogle className="icon" />
                  </li>
                  <li>
                    <AiFillYoutube className="icon" />
                  </li>
                  <li>
                    <FaFacebookF className="icon " />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </Fade>
    </div>
  );
}
