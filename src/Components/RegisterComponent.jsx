import React, {useState} from 'react'
import {Button,Modal,Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from 'jquery';

export default function RegisterComponent() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
       <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Üye Ol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email adresi</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                required
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" id={"ajaxPost"} onClick={handleClose}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
     </div>
  );
}
