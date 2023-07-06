import React, { useEffect } from "react";
//import { Link, useNavigate, useParams } from "react-router-dom";
import { Link, useNavigate} from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { listPersons, deletePerson, createPerson } from "../actions/personActions";
import { PERSON_CREATE_RESET, PERSON_DELETE_RESET } from '../constants/personConstants'
import { useLocation } from "react-router-dom";

function PersonListScreen() {
//function PersonListScreen(match, history) { match and history is supposed to be in here but why?
 //const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let keyword = new URLSearchParams(location.search).get("keyword") || "";

  
  const personList = useSelector((state) => state.personList);
  const { loading, error, persons, pages, page } = personList;

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
    //success: successCreate,
    person: createdPerson
  } = personCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

useEffect(() => {
  if (!userInfo.isAdmin) {
    navigate("/login");
  } else {
    if (createdPerson) {
      navigate(`/admin/person/edit/${createdPerson._id}`);
      dispatch({ type: PERSON_CREATE_RESET });
    } else {
      dispatch(listPersons(keyword));
    }

    if (successDelete) {
      navigate("/admin/personlist");
      dispatch({ type: PERSON_DELETE_RESET });
    }
  }
}, [dispatch, navigate, userInfo, createdPerson, successDelete, keyword]);



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

        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

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
          <Paginate pages={pages} page={page} isAdmin={true} />
          </div>
        )}
      </div>
    );
  };


export default PersonListScreen;
