import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from '../actions/userActions'

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const redirect = location.state ? Number(location.state) : "/";
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

     useEffect(() => {
       if (userInfo) {
         navigate(redirect);
       }
     }, [navigate, userInfo, redirect]);

  return (
    <FormContainer>
      <h1>Iniciar section</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese la contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Row className="py-3">
          <Col>
            ¿Nuevo usario?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Registrar
            </Link>
          </Col>
        </Row>

        <Button type="submit" variant="primary">
          Iniciar section
        </Button>
      </Form>
    </FormContainer>
  );
}

export default LoginScreen