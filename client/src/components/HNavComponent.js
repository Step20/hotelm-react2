import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { HashLink } from "react-router-hash-link";

function HNavPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {" "}
      <Navbar
        scrolling
        // color="light"
        // light
        light
        expand="md"
        className="hnav mx-auto"
      >
        <Fade up cascade="true" duration="1000">
          <HashLink
            to="/"
            spy={true}
            smooth={true}
            offset={0}
            duration={450}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <NavbarBrand className="nav-brand" href="/">
              Hotel<span className="light">Mahi</span>
            </NavbarBrand>{" "}
          </HashLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto nav-text" navbar>
              <NavItem>
                <NavLink href="/" to="/" className="link">
                  <HashLink
                    to="/#home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </HashLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="link">
                  <HashLink
                    to="/#about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About{" "}
                  </HashLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="link">
                  <HashLink
                    to="/#best"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Services{" "}
                  </HashLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="link">
                  <HashLink
                    to="/#last"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Pricing
                  </HashLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="link">
                  <HashLink
                    to="/#footer"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </HashLink>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button className="btn"> Book Now</Button>
            </NavbarText>
          </Collapse>
        </Fade>
      </Navbar>
    </div>
  );
}

export default HNavPage;
