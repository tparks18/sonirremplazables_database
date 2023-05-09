import React from 'react'
import { Card } from 'react-bootstrap'

function Person({ person }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/person/${person._id}`}>
        <Card.Img src={person.image} />
      </a>
      <Card.Body>
        <a href={`/person/${person._id}`}>
          <Card.Title className="text-center" as="div">
            <strong>
              <h5>
                {person.first_name} {person.last_name}
              </h5>
            </strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-2">
            <ul>
              <li className="list-group-item">
                <i className="fa-solid fa-phone"></i>
                <strong> Telefono:</strong> {person.phone_number_of_contact}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-location-dot"></i>
                <strong> Last Known Location: </strong>
                {person.last_known_location}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-calendar-xmark"></i>
                <strong> Desaparición:</strong> {person.date_and_time_last_seen}
              </li>
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Person