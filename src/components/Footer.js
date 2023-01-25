import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
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

            <li>Rolling Code School</li>
          </aside>
        </Col>
        <Col sm={12} md={5} lg={4}>
          <aside className="text-center mt-3">
            <h3>Contacto</h3>
            <p>E-mail: tomasgabriel1999@hotmail.com</p>
            <p>Tel/Wsp: 3816090335</p>
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
