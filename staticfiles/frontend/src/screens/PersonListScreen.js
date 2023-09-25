import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PaginateAdmin from "../components/PaginateAdmin";
import SearchBarAdmin from "../components/SearchBarAdmin";
import {
  listPersons,
  deletePerson,
  createPerson,
} from "../actions/personActions";
import {
  PERSON_CREATE_RESET,
  PERSON_DELETE_RESET,
} from "../constants/personConstants";

function PersonListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const personList = useSelector((state) => state.personList);
  const { loading, error, persons, page, pages } = personList;

  const personDelete = useSelector((state) => state.personDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = personDelete;

  const personCreate = useSelector((state) => state.personCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    person: createdPerson,
  } = personCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let keyword = new URLSearchParams(location.search).get("keyword") || "";
  let pageNumber = new URLSearchParams(location.search).get("page") || "";

useEffect(() => {
  if (!userInfo.isAdmin) {
    navigate("/login");
  } else {
    if (createdPerson) {
      navigate(`/admin/person/edit/${createdPerson._id}`);
      dispatch({ type: PERSON_CREATE_RESET });
    } else {
      dispatch(listPersons(keyword, pageNumber));
    }

    if (successDelete) {
      navigate("/admin/personlist");
      dispatch({ type: PERSON_DELETE_RESET });
    }
  }
}, [
  dispatch,
  navigate,
  userInfo,
  createdPerson,
  successDelete,
  keyword,
  pageNumber,
]);


  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this person card?")) {
      dispatch(deletePerson(id));
    }
  };

  const createPersonHandler = () => {
    dispatch(createPerson());
  };

  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <h1>Lista de personas desaparecidas</h1>
        </Col>

        <SearchBarAdmin />

        <Col className="text-right">
          <Button className="my-3" onClick={createPersonHandler}>
            <i className="fas fa-plus me-1"></i>Añadir desaparecido
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>SEXO</th>
                <th>EDAD CUANDO DESAPARECIÓ</th>
                <th>COLOR DE PELO</th>
                <th>COLOR DE OJOS</th>
                <th>ALTURA(cm)</th>
                <th>PESO(lbs)</th>
                <th>ÚLTIMA ROPA PUESTA</th>
                <th>INFORMACIÓN CRÍTICA</th>
                <th>PROVINCIA</th>
                <th>ÚLTIMA UBICACIÓN CONOCIDA</th>
                <th>ÚLTIMA VEZ VISTO</th>
                <th>EDITAR PERSONA DESAPARECIDA</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person._id}>
                  <td>{person._id}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.gender}</td>
                  <td>{person.age_last_seen}</td>
                  <td>{person.hair}</td>
                  <td>{person.eyes}</td>
                  <td>{person.height}</td>
                  <td>{person.weight}</td>
                  <td>{person.last_seen_wearing}</td>
                  <td>
                    <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                      {person.critical_information}
                    </div>
                  </td>
                  <td>{person.province}</td>
                  <td>{person.last_known_location}</td>
                  <td>{person.date_last_seen}</td>
                  <td>
                    <Link to={`/admin/person/edit/${person._id}`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(person._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PaginateAdmin pages={pages} page={page} />
        </div>
      )}
    </div>
  );
}

export default PersonListScreen;
