import React, { useEffect } from "react";
//import { missingPersons } from "../missingPersons";
import SearchBar from "../components/SearchBar";
import { Row, Col } from "react-bootstrap";
import Person from "../components/Person";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listPersons } from "../actions/personActions";
import { useLocation } from "react-router-dom";

function HomeScreen() {
  const location = useLocation();
  const dispatch = useDispatch();
  const personList = useSelector((state) => {
    console.log("State:", state);
    return state.personList;
  });
  const { error, loading, persons } = personList;
  let keyword = new URLSearchParams(location.search).get("keyword") || "";

  useEffect(() => {
    dispatch(listPersons(keyword));
  }, [dispatch, keyword]);

  console.log("Persons:", persons);

  return (
    <div>
      <h3 className="section-title mt-3">Base de Datos</h3>
      <div className="main-title-container">
        <h1 className="main-title">Personas Desaparecidas en RD 🇩🇴</h1>
      </div>
      <SearchBar />
      <h2>Búsquedas:</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {persons.map((person) => (
            <Col key={person._id} sm={12} md={6} lg={4} xl={3}>
              <Person person={person} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
