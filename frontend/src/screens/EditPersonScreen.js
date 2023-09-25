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
        Página anterior
      </Link>
      <FormContainer>
        <h1>Editar Perfil de Persona Desaparecida</h1>
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
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe Nombre"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe Apellido"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group id="image">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subir Imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>

              <Form.Control
                type="file"
                id="image-file"
                label="Elegir Archivo"
                custom
                onChange={uploadFileHandler}
              ></Form.Control>
              {uploading && <Loader />}
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="gender">
                  <Form.Label>Sexo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sexo"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="ageLastSeen">
                  <Form.Label>Edad cuando desapareció</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Añadir edad del desaparecido"
                    value={age_last_seen}
                    onChange={(e) => setAgeLastSeen(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="hair">
                  <Form.Label>Color de pelo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Color de pelo"
                    value={hair}
                    onChange={(e) => setHair(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="eyes">
                  <Form.Label>Color de ojos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Color de ojos"
                    value={eyes}
                    onChange={(e) => setEyes(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="height">
                  <Form.Label>Altura(cm)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Altura"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="weight">
                  <Form.Label>Peso(lbs)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Peso"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="lastSeenWearing">
              <Form.Label>Última ropa puesta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Última ropa puesta"
                value={last_seen_wearing}
                onChange={(e) => setLastSeenWearing(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="criticalInformation">
              <Form.Label>Información crítica</Form.Label>
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
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese provincia"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese ciudad"
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
                placeholder="Última ubicación conocida"
                value={last_known_location}
                onChange={(e) => setLastKnownLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dateLastSeen">
              <Form.Label>Última vez visto</Form.Label>
              <Form.Control
                type="date"
                placeholder="Última vez visto"
                value={date_last_seen}
                onChange={(e) => setDateLastSeen(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="primaryContactFirstName">
                  <Form.Label>Nombre del contacto principal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese nombre del contacto principal"
                    value={primary_contact_first_name}
                    onChange={(e) => setPrimaryContactFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="primaryLastName">
                  <Form.Label>Apellido del contacto principal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese apellido del contacto principal"
                    value={primary_contact_last_name}
                    onChange={(e) => setPrimaryContactLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="primaryContactPhone">
              <Form.Label>Número principal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese número principal"
                value={primary_contact_phone}
                onChange={(e) => setPrimaryContactPhone(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="secondaryContactFirstName">
                  <Form.Label>Nombre del contacto secundario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese nombre del contacto secundario"
                    value={secondary_contact_first_name}
                    onChange={(e) =>
                      setSecondaryContactFirstName(e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="secondaryLastName">
                  <Form.Label>Apellido del contacto secundario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese apellido del contacto secundario"
                    value={secondary_contact_last_name}
                    onChange={(e) =>
                      setSecondaryContactLastName(e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="secondaryContactPhone">
              <Form.Label>Número secundario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese número secundario"
                value={secondary_contact_phone}
                onChange={(e) => setSecondaryContactPhone(e.target.value)}
              />
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default EditPersonScreen;
