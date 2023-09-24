import React, { useEffect } from 'react'
import { Card, Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listPersonDetails } from '../actions/personActions'
import Loader from "../components/Loader";
import Message from "../components/Message";


function PersonScreen() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
      
    const dispatch = useDispatch();
    const { id } = useParams();

    const personDetails = useSelector(state => state.personDetails)
    const { error, loading, person } = personDetails;

    useEffect(() => {
      dispatch(listPersonDetails(id));
    }, [id, dispatch]);

  return (
    <div>
      <Link to="/" className="btn btn-danger my-3">
        Página Anterior
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                      <strong>
                        {person.first_name} {person.last_name}
                      </strong>
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
                      <strong>Color de pelo:</strong>
                    </Col>
                    <Col>{person.hair}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Color de los ojos:</strong>
                    </Col>
                    <Col>{person.eyes}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Altura(metros):</strong>
                    </Col>
                    <Col>{person.height}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Peso(kilos):</strong>
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
                      <strong>Información crítica:</strong>
                    </Col>
                    <Col>{person.critical_information}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Provincia:</strong>
                    </Col>
                    <Col>{person.province}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Última Ubicación Conocida: </strong>
                    </Col>
                    <Col>{person.last_known_location}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Date Last Seen:</strong>
                    </Col>
                    <Col>{person.date_last_seen}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col md={4}>
            {/* {userInfo.isAdmin && ( */}
            {userInfo && userInfo.isAdmin && (
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Col className="text-center">
                      <h5>
                        <strong>Contacts</strong>
                      </h5>
                    </Col>
                    <Row>
                      <Col>
                        <strong>Primary Contact First Name:</strong>
                      </Col>
                      <Col>{person.primary_contact_first_name}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Primary Last Name:</strong>
                      </Col>
                      <Col>{person.primary_contact_last_name}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Primary Contact Number:</strong>
                      </Col>
                      <Col>{person.primary_contact_phone}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Secondary Contact First Name:</strong>
                      </Col>
                      <Col>{person.secondary_contact_first_name}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Secondary Contact Name:</strong>
                      </Col>
                      <Col>{person.secondary_contact_last_name}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Secondary Contact Number:</strong>
                      </Col>
                      <Col>{person.secondary_contact_phone}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default PersonScreen
