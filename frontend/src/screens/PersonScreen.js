import React from 'react'
import { Card, Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { missingPersons } from "../missingPersons";


function PersonScreen() {
    let { id } = useParams();

    const person = missingPersons.find((p) => p._id == id);

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
                    <strong>Time Last Seen:</strong>
                  </Col>
                  <Col>{person.date_and_time_last_seen}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Col className="text-center">
                  <h5>
                    {person.first_name} {person.last_name}
                  </h5>
                </Col>
              </ListGroup.Item>

              <ListGroup.Item>Gender: {person.gender}</ListGroup.Item>

              <ListGroup.Item>
                Age Last Seen: {person.age_last_seen}
              </ListGroup.Item>

              <ListGroup.Item>Hair: {person.hair}</ListGroup.Item>

              <ListGroup.Item>Eyes: {person.eyes}</ListGroup.Item>

              <ListGroup.Item>Height: {person.height}</ListGroup.Item>

              <ListGroup.Item>Weight: {person.weight}</ListGroup.Item>

              <ListGroup.Item>
                Last Seen Wearing: {person.last_seen_wearing}
              </ListGroup.Item>

              <ListGroup.Item>
                Critical Information: {person.critical_information}
              </ListGroup.Item>

              <ListGroup.Item>Province: {person.province}</ListGroup.Item>

              <ListGroup.Item>
                Last Known Location: {person.last_known_location}
              </ListGroup.Item>

              <ListGroup.Item>
                Last and Time Last Seen: {person.date_and_time_last_seen}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}

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

{/* <ListGroup.Item>
              Name of Primary Contact: {person.name_of_contact}
            </ListGroup.Item>

            <ListGroup.Item>
              Primary Contact Number: {person.phone_number_of_contact}
            </ListGroup.Item>

            <ListGroup.Item>
              Name of Secondary Contact: {person.name_of_contact_2}
            </ListGroup.Item>

            <ListGroup.Item>
              Secondary Contact Number: {person.phone_number_of_contact_2}
            </ListGroup.Item> */}