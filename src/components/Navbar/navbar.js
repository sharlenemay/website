import React from "react";
import {
  Nav,
  Navbar,
  // NavDropdown,
} from "react-bootstrap";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Navbar className="navBar" collapseOnSelect expand="lg">
        <Navbar.Brand id="sharlenemay" className="navLink" href="/">
          Sharlene May
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navBar"> */}
          <NavLink className="navLinks" activeClassName="active" to="/media">
            portfolio
          </NavLink>
          <NavLink className="navLinks" activeClassName="active" to="/anthropology">
            writing
          </NavLink>
          {/* <NavLink className="navLinks" activeClassName="active" to="/contact">
            contact
          </NavLink> */}
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        {/* </Nav>
      </Navbar.Collapse> */}
      </Navbar>
      <hr/>
    </div>
  );
}
