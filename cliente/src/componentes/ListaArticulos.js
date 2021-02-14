import React from "react";
import { Button, Container, Row, Card, CardColumns } from "react-bootstrap";

function ListaArticulos(props) {
  const articulos = props.articulos;
  return (
    <>
      <Container>
        <Row className="float-right">
          <Button
            variant="danger"
            onClick={() => {
              props.changeWindow("login");
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
  );
}

export default ListaArticulos;
