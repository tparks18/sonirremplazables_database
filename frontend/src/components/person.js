import React from 'react'
import { Card } from 'react-bootstrap'

function Person({ person }) {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/person/${person._id}`}>
            <Card.Img src={person.image}/>
        </a>
            <h5>{person.first_name}</h5>
    </Card>
  )
}

export default Person