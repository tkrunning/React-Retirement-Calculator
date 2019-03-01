import React from "react";
import { Link } from "react-router";
import { Navbar } from "react-materialize";

const Nav = () => (
  <Navbar style={{ backgroundColor: "#000" }} brand="Nomad Gate" left>
    <li>
      <Link to="/calculator">Retirement Calculator</Link>
    </li>
  </Navbar>
);

export default Nav;
