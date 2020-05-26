import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Drunken Clam Brewery</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
