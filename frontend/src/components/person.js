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
          <Card.Title class="text-center" as="div">
            <strong>
              <h5>
                {person.first_name} {person.last_name}
              </h5>
            </strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-2">
              <ul>
                <li class="list-group-item">
                  <strong>Telefono:</strong> {person.phone_number_of_contact}
                </li>
                <li class="list-group-item">
                  <strong>Last Known Location: </strong>
                  {person.last_known_location}
                </li>
                <li class="list-group-item">
                  <strong>Desaparición:</strong>{" "}
                  {person.date_and_time_last_seen}
                </li>
              </ul>
            </div>
          </Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Person