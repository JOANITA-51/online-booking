import React from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <Container>
     <Alert variant="success">You have Successfully registered</Alert>
     <Link to = '/book-now'><Button>next</Button></Link>
     
    </Container>
  )
}

export default Success