import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
//import { missingPersons } from "../missingPersons";
import axios from "axios";


function PersonScreen() {
    const personId = useParams();

    //const person = missingPersons.find((p) => p._id == id);

      const [person, setPerson] = useState([]);

      useEffect(() => {
        async function fetchMissingPerson() {
          const { data } = await axios.get(`/api/missingPersons/${personId.id}`);
          setPerson(data);
        }

        fetchMissingPerson();
      }, [personId]);

  return (
    <div>
      <Link to="/" className="btn btn-danger my-3">
        Página Anterior
      </Link>
      <Row>
        <Col md={3}>
          <Image src={person.image} alt={person.first_name} fluid />
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Col className="text-center">
                  <h5>
                    {person.first_name} {person.last_name}
                  </h5>
                </Col>
                <Row>
                  <Col>
                    <strong>Gender:</strong>
                  </Col>
                  <Col>{person.gender}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Age Last Seen:</strong>
                  </Col>
                  <Col>{person.age_last_seen}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Hair:</strong>
                  </Col>
                  <Col>{person.hair}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Eyes:</strong>
                  </Col>
                  <Col>{person.eyes}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Height:</strong>
                  </Col>
                  <Col>{person.height}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Weight:</strong>
                  </Col>
                  <Col>{person.weight}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Last Seen Wearing:</strong>
                  </Col>
                  <Col>{person.last_seen_wearing}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Critical Information:</strong>
                  </Col>
                  <Col>{person.critical_information}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Province:</strong>
                  </Col>
                  <Col>{person.province}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Last Known Location:</strong>
                  </Col>
                  <Col>{person.last_known_location}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Date Last Seen:</strong>
                  </Col>
                  <Col>{person.date_and_time_last_seen}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Col className="text-center">
                  <h5>
                    <stong>Contacts</stong>
                  </h5>
                </Col>
                <Row>
                  <Col>
                    <strong>Primary Contact Name:</strong>
                  </Col>
                  <Col>{person.name_of_contact}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Primary Contact Number:</strong>
                  </Col>
                  <Col>{person.phone_number_of_contact}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Secondary Contact Name:</strong>
                  </Col>
                  <Col>{person.name_of_contact_2}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Secondary Contact Number:</strong>
                  </Col>
                  <Col>{person.phone_number_of_contact_2}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PersonScreen

// might need to add button around here for editing and deleting things, see product details screen video