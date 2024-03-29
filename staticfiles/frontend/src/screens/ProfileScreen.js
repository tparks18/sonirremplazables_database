import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

function ProfileScreen() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

 const [fetchedUserDetails, setFetchedUserDetails] = useState(false);


useEffect(() => {
  if (!userInfo) {
    navigate("/login");
  } else {
    if (!fetchedUserDetails || success) {
      dispatch({ type:USER_UPDATE_PROFILE_RESET })
      dispatch(getUserDetails("profile"));
      setFetchedUserDetails(true);
    } else if (user) {
      console.log(user); // Log the user data
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }
  }
}, [dispatch, navigate, userInfo, user, fetchedUserDetails, success]);



    const submitHandler = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
      } else {
        dispatch(
          updateUserProfile({
            id: user._id,
            first_name: firstName, //use the state variable firstName
            last_name: lastName, //use the state variable lastName
            email: email,
            password: password,
          })
        );
        setMessage("");
      }
    };

  return (
    <Row>
      <Col md={3}>
        <h2>Perfil de usuario</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="firstName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese el nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese el apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              required
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

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="mt-3" type="submit" variant="primary">
            Actualizar
          </Button>
        </Form>
      </Col>

      {/* <Col md={9}>
        <h2>My Uploads</h2>
      </Col> */}
    </Row>
  );
}

export default ProfileScreen;
