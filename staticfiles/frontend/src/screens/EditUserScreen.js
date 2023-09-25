import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from '../constants/userConstants'

function EditUserScreen() {

const { id } = useParams();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

   const navigate = useNavigate();
  const dispatch = useDispatch();

const redirect = "/admin/userlist";

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { error:errorUpdate, loading:loadingUpdate, success:successUpdate } = userUpdate;

  useEffect(() => {

    if(successUpdate){
      dispatch({type:USER_UPDATE_RESET})
      navigate(redirect);
    } else {

      if(!user.first_name || !user.last_name || user._id !== Number(id) ){
        dispatch(getUserDetails(id))
      } else {
        setFirstName(user.first_name)
        setLastName(user.last_name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }

  }, [dispatch, user, id, successUpdate, navigate]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({_id:user._id, first_name, last_name, email, isAdmin }))
  };

  return (
    <div>
      <Link className="btn btn-primary" to="/admin/userlist">
        Página anterior
      </Link>
      <FormContainer>
        <h1>Editar usario</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="firstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin">
              <Form.Label>Administrador</Form.Label>
              <Form.Check
                type="checkbox"
                label="Administrador"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default EditUserScreen;
