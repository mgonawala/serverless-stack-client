import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import './App.css';
import {Link} from "react-router-dom";
import Routes from "./Routes";
import {LinkContainer} from "react-router-bootstrap";

function App() {
  return (
   <div className="App container">
    <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/" >Scratch</Link>
      </Navbar.Brand>
    </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/signup">
          <NavItem >Signup</NavItem>
          </LinkContainer>

          <LinkContainer to="/login">
            <NavItem >login</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
     <Routes />

   </div>
  );
}

export default App;