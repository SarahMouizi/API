import React from 'react'
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards=({users})=> {
    console.log ('users',users)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={users.phone} />
  <Card.Body>
    <Card.Title>{users.name}</Card.Title>
    <Card.Text>
      {users.email}
    </Card.Text>
    <Button variant="primary">Profil</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Cards ;
