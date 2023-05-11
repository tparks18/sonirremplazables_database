import React, { useEffect } from "react";
//import { missingPersons } from "../missingPersons";
import { Row, Col } from "react-bootstrap";
import Person from '../components/Person'
import { useDispatch, useSelector } from 'react-redux'
import { listPersons } from '../actions/personActions'

function HomeScreen() {

  const dispatch = useDispatch()
 const personList = useSelector((state) => {
   console.log("State:", state);
   return state.personList;
 });
  const { error, loading, persons } = personList;

  useEffect(() => {

    dispatch(listPersons())

  }, [dispatch])

  return (
    <div>
      <h2>Búsquedas:</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
