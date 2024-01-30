import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <Container>
            <h2>404</h2>
            <h4>Sorry! Page not found</h4>
            <NavLink to="/">Return home</NavLink>
        </Container>
    </div>
  )
}

export default Error