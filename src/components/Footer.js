import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from "react-bootstrap";
import CursoR from "../assets/img/curso.png.png";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col sm={12} md={5} lg={4}>
          <aside className="text-center mt-3">
            <h3>Direccion</h3>
            <p>
              <br /> Gobernador Gutierrez 1535
            </p>
          </aside>
        </Col>
        <Col sm={12} md={5} lg={4}>
          <aside className="text-center mt-3">
            <h3>Curso certificado por:</h3>
            <Button variant="primary" onClick={handleShow}>
        Rolling Code School
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body> <img src={CursoR} className="diploma" /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
            

           
          </aside>
        </Col>
        <Col sm={12} md={5} lg={4}>
          <aside className="text-center mt-3">
            <h3>Contacto</h3>

            <p>
              <i class="bi bi-envelope-at"></i>tomasgabriel1999@hotmail.com
            </p>
            <p>
              <i class="bi bi-whatsapp"></i>3816090335
            </p>
          </aside>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p>&copy; Todos los derechos reservados</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
