import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Person({ person }) {
  return (
    <Card className="my-3 p-3 rounded shadow p-3 mb-5 bg-white rounded">
      <Link to={`/person/${person._id}`}>
        <Card.Img src={person.image} />
      </Link>
      <Card.Body>
        <Link to={`/person/${person._id}`}>
          <Card.Title className="text-center" as="div">
            <strong>
              <h5>
                {person.first_name} {person.last_name}
              </h5>
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-2">
            <ul>
              <li className="list-group-item">
                <i className="fa-solid fa-location-dot"></i>
                <strong> Last Known Location: </strong>
                {person.last_known_location}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-calendar-xmark"></i>
                <strong> Desaparición:</strong> {person.date_last_seen}
              </li>
            </ul>
            <div className="text-center">
              <Link to={`/person/${person._id}`}>
                <button type="button" className="btn btn-danger">
                  Ampliar
                </button>
              </Link>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Person