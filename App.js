import React from 'react';
import logo from './logo.svg';
import logo1 from './logo_A.jpg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="FormWrap">
      
      <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="/"><img src={logo1} alt="logo1" className="img-responsive"/></Navbar.Brand>
  </Container>
</Navbar>
<div className="form1">
       <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridfirst">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="first" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNPI">
      <Form.Label>NPI number</Form.Label>
      <Form.Control type="NPI number" placeholder="NPI number" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridAddress">
    <Form.Label>Business Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridPhone">
    <Form.Label>Telephone Number</Form.Label>
    <Form.Control placeholder="XXX-XXX-XXXX" />
  </Form.Group>

  <Form.Group controlId="formGridEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control placeholder="Email" />
  </Form.Group>

  <Form.Row>   
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
  </Form>
  </div>
    </div>
  );
}
export default App;