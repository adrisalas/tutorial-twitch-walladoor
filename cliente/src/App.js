import "./App.css";
import { Container, Jumbotron } from "react-bootstrap";
import Login from "./componentes/Login";
import ListaArticulos from "./componentes/ListaArticulos";
import React, { useState } from "react";

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [user, setUser] = useState({});
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
        <Login
          changeWindow={(pantalla) => setPantalla(pantalla)}
          setUser={(user) => setUser(user)}
        ></Login>
      ) : (
        <ListaArticulos
          changeWindow={(pantalla) => setPantalla(pantalla)}
          articulos={articulos}
        ></ListaArticulos>
      )}
    </>
  );
}

export default App;
