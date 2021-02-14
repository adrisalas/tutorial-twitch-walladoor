import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import React from "react";

function Login(props) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-5">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Usuario" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      props.setPantalla("lista");
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-5">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Usuario" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Repite email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Repite contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      alert("Oye");
                    }}
                  >
                    Registro sesión
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
