import React from "react";
import { missingPersons } from "../assets/missingPersons";
import { Row, Col } from "react-bootstrap";
import Person from '../components/Person'

function HomeScreen() {
  console.log(missingPersons); // Check the imported array in the console
  console.log(Array.isArray(missingPersons)); // Check if missingPersons is an array

  return (
    <div>
      <h2>Búsquedas:</h2>
      <Row>
        {missingPersons.map((person) => (
          <Col key={person._id} sm={12} md={6} lg={4} xl={3}>
            <Person person={person} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
