import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export const NotFound = () => {
  return (
    <Container style={{backgroundColor:'red'}}>
        <Row>
            <Col md={6}>
              <h1 className='text-cener text-white'>404</h1>
              <p className='text-cener text-white'>page not found</p>
            </Col>
        </Row>
    </Container>
  )
}
