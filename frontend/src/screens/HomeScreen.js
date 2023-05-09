import React from "react";
import { missingPersons } from "../assets/missingPersons";
import { Row, Col } from "react-bootstrap";

function HomeScreen() {
  console.log(missingPersons); // Check the imported array in the console
  console.log(Array.isArray(missingPersons)); // Check if missingPersons is an array

  return (
    <div>
      <h1>Búsquedas:</h1>
      <Row>
        {missingPersons.map((person) => (
          <Col key={person._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{person.first_name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
