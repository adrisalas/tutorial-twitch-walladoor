import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  Form,
  CardColumns,
} from "react-bootstrap";
import React, { useState } from "react";

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [articulos, setArticulos] = useState([
    {
      img:
        "https://www.pulsovideojuegos.com/wp-content/uploads/2020/01/super-mario-bros-3.jpg",
      titulo: "Super Mario Bros",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis magna, suscipit at mattis a, commodo eu velit. Etiam lectus lorem, facilisis eu pharetra quis, convallis quis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nunc ipsum, rutrum vitae facilisis ac, sagittis vitae sem.",
      autor: "adri",
    },
    {
      img:
        "https://www.pulsovideojuegos.com/wp-content/uploads/2020/01/super-mario-bros-3.jpg",
      titulo: "Super Mario Bros 2",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis magna, suscipit at mattis a, commodo eu velit. ",
      autor: "adri2",
    },
    {
      img: "http://cdn.mos.cms.futurecdn.net/er3A7Y4hm89VhYvvwkrptK.jpg",
      titulo: "Montura WoW",
      descripcion: "Me sobra esta montura, y la vendo por 5€",
      autor: "Nei",
    },
  ]);
  return (
    <>
      <Container fluid>
        <Jumbotron>
          <h1>Walladoor</h1>
        </Jumbotron>
      </Container>
      {pantalla == "login" ? (
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
                        <Form.Control
                          type="password"
                          placeholder="Contraseña"
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setPantalla("lista");
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
                        <Form.Control
                          type="password"
                          placeholder="Contraseña"
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repite contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Contraseña"
                        />
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
      ) : (
        <>
          <Container>
            <Row className="float-right">
              <Button
                variant="danger"
                onClick={() => {
                  setPantalla("login");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-octagon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </Button>
            </Row>
            <Row>
              <h1>Lista de articulos</h1>
            </Row>
            <Row className="mt-3">
              <CardColumns>
                {articulos.map((articulo) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={articulo.img} />
                    <Card.Body>
                      <Card.Title>{articulo.titulo}</Card.Title>
                      <Card.Text>{articulo.descripcion}</Card.Text>
                      <Button
                        variant="outline-success"
                        onClick={() => {
                          alert("Mandar mensaje a: " + articulo.autor);
                        }}
                      >
                        Chat
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </CardColumns>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
