import React from "react";
import { Navbar } from "react-bootstrap";

import "./header.scss";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Beer!</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
