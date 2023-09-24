import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { listPersonDetails, updatePerson } from "../actions/personActions";
import { PERSON_UPDATE_RESET } from "../constants/personConstants";

function EditPersonScreen() {
  const { person_id } = useParams();

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
  const [city, setCity] = useState("");
  const [last_known_location, setLastKnownLocation] = useState("");
  const [date_last_seen, setDateLastSeen] = useState("");
  const [primary_contact_first_name, setPrimaryContactFirstName] = useState("");
  const [primary_contact_last_name, setPrimaryContactLastName] = useState("");
  const [primary_contact_phone, setPrimaryContactPhone] = useState("");
  const [secondary_contact_first_name, setSecondaryContactFirstName] =
    useState("");
  const [secondary_contact_last_name, setSecondaryContactLastName] =
    useState("");
  const [secondary_contact_phone, setSecondaryContactPhone] = useState("");
  const [uploading, setUpload] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const personDetails = useSelector((state) => state.personDetails);
  const { error, loading, person } = personDetails;

  const personUpdate = useSelector((state) => state.personUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = personUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PERSON_UPDATE_RESET });
      navigate("/admin/personlist");
    } else {
      if (
        !person.first_name ||
        !person.last_name ||
        person._id !== Number(person_id)
      ) {
        dispatch(listPersonDetails(person_id));
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
        setProvince(person.province);
        setCity(person.city);
        setLastKnownLocation(person.last_known_location);
        setDateLastSeen(person.date_last_seen);
        setPrimaryContactFirstName(person.primary_contact_first_name);
        setPrimaryContactLastName(person.primary_contact_last_name);
        setPrimaryContactPhone(person.primary_contact_phone);
        setSecondaryContactFirstName(person.secondary_contact_first_name);
        setSecondaryContactLastName(person.secondary_contact_last_name);
        setSecondaryContactPhone(person.secondary_contact_phone);
      }
    }
  }, [dispatch, person, person_id, navigate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePerson({
        _id: person_id,
        first_name,
        last_name,
        image,
        gender,
        age_last_seen,
        hair,
        eyes,
        height,
        weight,
        last_seen_wearing,
        critical_information,
        province,
        city,
        last_known_location,
        date_last_seen,
        primary_contact_first_name,
        primary_contact_last_name,
        primary_contact_phone,
        secondary_contact_first_name,
        secondary_contact_last_name,
        secondary_contact_phone,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file)
    formData.append('person_id', person_id)
    setUpload(true)

    try {
      const config = {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }
      const {data} = await axios.post('/api/missingPersons/upload/', formData, config)
      
      setImage(data)
      setUpload(false)

    } catch(error) {
      setUpload(false)
    }


  };

  return (
    <div>
      <Link className="btn btn-primary" to="/admin/personlist">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Person</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

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

            <Form.Group id="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Upload Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>

              <Form.Control
                type="file"
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.Control>
              {uploading && <Loader />}
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

            <Row>
              <Col>
                <Form.Group controlId="province">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="lastKnownLocation">
              <Form.Label>Última Ubicación Conocida: </Form.Label>
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
                <Form.Group controlId="primaryContactFirstName">
                  <Form.Label>Primary Contact First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Primary Contact First Name"
                    value={primary_contact_first_name}
                    onChange={(e) => setPrimaryContactFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="primaryLastName">
                  <Form.Label>Primary Contact Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Primary Contact Last Name"
                    value={primary_contact_last_name}
                    onChange={(e) => setPrimaryContactLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="primaryContactPhone">
              <Form.Label>Primary Contact Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Primary Contact Phone"
                value={primary_contact_phone}
                onChange={(e) => setPrimaryContactPhone(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="secondaryContactFirstName">
                  <Form.Label>Secondary Contact First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Secondary Contact First Name"
                    value={secondary_contact_first_name}
                    onChange={(e) =>
                      setSecondaryContactFirstName(e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="secondaryLastName">
                  <Form.Label>Secondary Contact Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter secondary Contact Last Name"
                    value={secondary_contact_last_name}
                    onChange={(e) =>
                      setSecondaryContactLastName(e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="secondaryContactPhone">
              <Form.Label>Secondary Contact Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Secondary Contact Phone"
                value={secondary_contact_phone}
                onChange={(e) => setSecondaryContactPhone(e.target.value)}
              />
            </Form.Group>

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
