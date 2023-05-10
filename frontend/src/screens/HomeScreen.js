import React, { useState, useEffect } from "react";
//import { missingPersons } from "../missingPersons";
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import Person from '../components/Person'

function HomeScreen() {

  const [missingPersons, setMissingPersons] = useState([])

  useEffect(() => {

    async function fetchMissingPersons() {
        const { data } = await axios.get("/api/missingPersons/");
        setMissingPersons(data)
    }

    fetchMissingPersons()

  }, [])

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
