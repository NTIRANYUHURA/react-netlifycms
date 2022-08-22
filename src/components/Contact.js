import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div className = "container ">
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Votre Email" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Votre Nom" />
      </Form.Group>

     
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Adresse</Form.Label>
      <Form.Control placeholder="votre localité" />
    </Form.Group>

   

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Ville</Form.Label>
        <Form.Control />
      </Form.Group>

     

      
    </Row>

    

    <Button variant="primary" type="submit">
      Envoyer
    </Button>
  </Form>
  </div>
);
 

}

export default Contact
