import React, { useState, useEffect, useReducer } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { listPersonDetails } from "../actions/personActions";

function EditPersonScreen() {
  const { id } = useParams();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [age_last_seen, setAgeLastSeen] = useState(0);
  const [hair, setHair] = useState("");
  const [eyes, setEyes] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [last_seen_wearing, setLastSeenWearing] = useState("");
  const [critical_information, setCriticalInformation] = useState("");
  const [province, setProvince] = useState("");
  const [last_known_location, setLastKnownLocation] = useState("");
  const [date_last_seen, setDateLastSeen] = useState("");
  const [primary_contact_name, setPrimaryContactName] = useState("");
  const [primary_contact_number, setPrimaryContactNumber] = useState("");
  const [secondary_contact_name, setSecondaryContactName] = useState("");
  const [secondary_contact_number, setSecondaryContactNumber] = useState("");

  //   const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const redirect = location.state ? Number(location.state) : "/";
  const redirect = "/admin/userlist";

  const personDetails = useSelector((state) => state.personDetails);
  const { error, loading, person } = personDetails;

  useEffect(() => {
    if (!person.first_name || !person.last_name || person._id !== Number(id)) {
      dispatch(listPersonDetails(id));
    } else {
      setFirstName(person.first_name);
      setLastName(person.last_name);
      setImage(person.image);
      setGender(person.gender);
      setAgeLastSeen(person.age_last_seen);
      setHair(person.hair);
      setEyes(person.eyes);
      setHeight(person.height);
      setWeight(person.weight);
      setLastSeenWearing(person.last_seen_wearing);
      setCriticalInformation(person.critical_information);
      setProvince(person.setProvince);
      setLastKnownLocation(person.last_known_location);
      setDateLastSeen(person.date_last_seen);
      setPrimaryContactName(person.primary_contact_name);
      setPrimaryContactNumber(person.primary_contact_number);
      setSecondaryContactName(person.secondary_contact_name);
      setSecondaryContactNumber(person.secondary_contact_number);
    }
  }, [dispatch, person, id, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    //update person
  };

  return (
    <div>
      <Link className="btn btn-primary" to="/admin/personlist">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Person</h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Upload Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="ageLastSeen">
                  <Form.Label>Age Last Seen</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Age Last Seen"
                    value={age_last_seen}
                    onChange={(e) => setAgeLastSeen(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="hair">
                  <Form.Label>Hair</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Hair Description"
                    value={hair}
                    onChange={(e) => setHair(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="eyes">
                  <Form.Label>Eyes</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Eye Description"
                    value={eyes}
                    onChange={(e) => setEyes(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="height">
                  <Form.Label>Height</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="weight">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="lastSeenWearing">
              <Form.Label>Last Seen Wearing</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Seen Wearing"
                value={last_seen_wearing}
                onChange={(e) => setLastSeenWearing(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="criticalInformation">
              <Form.Label>Critical Information</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Critical Information"
                value={critical_information}
                onChange={(e) => setCriticalInformation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="province">
              <Form.Label>Province</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="lastKnownLocation">
              <Form.Label>Last Known Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Known Location"
                value={last_known_location}
                onChange={(e) => setLastKnownLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dateLastSeen">
              <Form.Label>Date Last Seen</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date Last Seen"
                value={date_last_seen}
                onChange={(e) => setDateLastSeen(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="primaryContactName">
                  <Form.Label>Primary Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Primary Contact Name"
                    value={primary_contact_name}
                    onChange={(e) => setPrimaryContactName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="primaryContactPhone">
                  <Form.Label>Primary Contact Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Primary Contact Phone"
                    value={primary_contact_number}
                    onChange={(e) => setPrimaryContactNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="secondaryContactName">
                  <Form.Label>Secondary Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Secondary Contact Name"
                    value={secondary_contact_name}
                    onChange={(e) => setSecondaryContactName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="secondaryContactPhone">
                  <Form.Label>Secondary Contact Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Secondary Contact Phone"
                    value={secondary_contact_number}
                    onChange={(e) => setSecondaryContactNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="mt-3" type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default EditPersonScreen;
