import React from 'react'

import { Col, Container, Row } from "react-bootstrap";

import homeimage from '../images/homeimg.jpg';

const Home = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='mt-5'>
        <h3>Welcome to Form Pro - Where Form Creation is Effortless! Are you looking for a hassle-free way to create customized forms tailored to your needs? 
          Look no further! Form Pro is your go-to destination for creating seamless and personalized forms in just a few clicks.</h3>
        </Col>

        <Col>
          <img src={homeimage} style={{"width":"500px", "height":"350px"}} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home