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
          <Card.Title as="div">
            <strong>
              {person.first_name} {person.last_name}
            </strong>
          </Card.Title>
          <Card.Text as="div">
              {person.phone_number_of_contact}
          </Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Person