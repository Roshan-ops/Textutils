import React from "react";
import {Button,Container,Form,Nav,Navbar} from 'react-bootstrap';


const Navbar1= ()=>{
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand for="/">TextUtilize</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll>
            <Nav.Link for="/">Home</Nav.Link>
            <Nav.Link for="/">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navbar1;