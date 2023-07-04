import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listPersons, deletePerson } from "../actions/personActions";

function PersonListScreen() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = "/login";

  
  const personList = useSelector((state) => state.personList);
  const { loading, error, persons } = personList;

  const personDelete = useSelector((state) => state.personDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = personDelete;

  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listPersons());
    } else {
      navigate(redirect);
    }
  }, [dispatch, navigate, redirect, userInfo, successDelete]);


const deleteHandler = (id) => {
  if (window.confirm("Are you sure you want to delete this person card?")) {
    dispatch(deletePerson(id));
  }
};


  const createPersonHandler = (person) => {
    //create person
    }

    return (
      <div>
        <Row className="align-items-center">
          <Col>
            <h1>Missing People</h1>
          </Col>

          <Col className="text-right">
            <Button className="my-3" onClick={createPersonHandler}>
              <i className="fas fa-plus me-1"></i>Create Person Card
            </Button>
          </Col>
        </Row>

        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>GENDER</th>
                <th>AGE LAST SEEN</th>
                <th>HAIR</th>
                <th>EYES</th>
                <th>HEIGHT</th>
                <th>WEIGHT</th>
                <th>LAST SEEN WEARING</th>
                <th>CRITICAL INFORMATION</th>
                <th>PROVINCE</th>
                <th>LAST KNOWN LOCATION</th>
                <th>DATE LAST SEEN</th>
                {/* <th>PRIMARY CONTACT NAME</th>
                <th>PRIMARY CONTACT NUMBER</th>
                <th>SECONDARY CONTACT NAME</th>
                <th>SECONDARY CONTACT NUMBER</th> */}
                <th>EDIT MISSING PERSON</th>
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
                  {/* <td>{person.name_of_contact}</td>
                  <td>{person.phone_number_of_contact}</td>
                  <td>{person.name_of_contact_2}</td>
                  <td>{person.phone_number_of_contact_2}</td> */}
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
        )}
      </div>
    );
  };


export default PersonListScreen;
