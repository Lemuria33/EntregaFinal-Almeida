import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prod.img} />
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        {prod.description}
        </Card.Text>
        <Card.Text>
        ${prod.price}
        </Card.Text>
        <Button as={Link} to={`/item/${prod.id}`} variant="primary">Detalles</Button>
    </Card.Body>
    </Card>
)
}

export default Item