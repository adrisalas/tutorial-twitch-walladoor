import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import React, { useState } from "react";

function Login(props) {
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errorEnLogin, setErrorEnLogin] = useState("");

  const [usuarioSignup, setUsuarioSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [email2Signup, setEmail2Signup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [password2Signup, setPassword2Signup] = useState("");
  const [errorEnSingUp, setErrorEnSingUp] = useState("");
  const [okEnSingUp, setOkEnSingUp] = useState("");

  const signUp = () => {
    if (emailSignup == email2Signup && passwordSignup == password2Signup) {
      var requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: usuarioSignup,
          password: passwordSignup,
          email: emailSignup,
        }),
        redirect: "follow",
      };

      fetch("/api/users", requestOptions)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw "error";
          }
        })
        .then((result) => {
          console.log("3");
          setUsuarioSignup("");
          setEmailSignup("");
          setEmail2Signup("");
          setPasswordSignup("");
          setPassword2Signup("");
          setErrorEnSingUp("");
          setOkEnSingUp("Usuario registrado");
        })
        .catch((error) => {
          console.log("E");
          setErrorEnSingUp("La has liado pardisima");
          setOkEnSingUp("");
        });
    } else {
      setErrorEnSingUp("La has liado pardisima");
      setOkEnSingUp("");
    }
  };

  const login = () => {
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: usuarioLogin, password: passwordLogin }),
      redirect: "follow",
    };

    fetch("/api/login", requestOptions)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw "error";
        }
      })
      .then((result) => {
        props.setUser(result);
        props.changeWindow("lista");
      })
      .catch((error) => setErrorEnLogin("La has liado pardisima"));
  };

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
                    <Form.Control
                      type="text"
                      placeholder="Usuario"
                      value={usuarioLogin}
                      onChange={(e) => setUsuarioLogin(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                  </Form.Group>
                  {errorEnLogin != "" ? (
                    <Alert variant="danger">{errorEnLogin}</Alert>
                  ) : undefined}
                  <Button
                    variant="primary"
                    onClick={() => {
                      login();
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
                    <Form.Control
                      type="text"
                      placeholder="Usuario"
                      value={usuarioSignup}
                      onChange={(e) => setUsuarioSignup(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={emailSignup}
                      onChange={(e) => setEmailSignup(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Repite email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email2Signup}
                      onChange={(e) => setEmail2Signup(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={passwordSignup}
                      onChange={(e) => setPasswordSignup(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Repite contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={password2Signup}
                      onChange={(e) => setPassword2Signup(e.target.value)}
                    />
                  </Form.Group>
                  {errorEnSingUp != "" ? (
                    <Alert variant="danger">{errorEnSingUp}</Alert>
                  ) : undefined}
                  {okEnSingUp != "" ? (
                    <Alert variant="success">{okEnSingUp}</Alert>
                  ) : undefined}
                  <Button
                    variant="primary"
                    onClick={() => {
                      signUp();
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
