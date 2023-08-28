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
import { HashLink } from "react-router-hash-link";

function NavPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        scrolling
        // color="light"
        // light
        dark
        expand="md"
        className="nav mx-auto"
      >
        <Link
          to="home"
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
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto nav-text" navbar>
            <NavItem>
              <NavLink href="/" to="/" className="link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="active"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  About{" "}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="link">
                <Link
                  to="best"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  Services{" "}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="link">
                <Link
                  to="last"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  Pricing
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="link">
                <Link
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <HashLink to="/hotel">
              <Button className="btn"> Book Now</Button>{" "}
            </HashLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavPage;
