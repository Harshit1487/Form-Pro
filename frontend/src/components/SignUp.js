import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom";

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

import { RootContext } from "../context/RootContext";

const SignUp = () => {
    const {userDetail, setUserDetail} = useContext(RootContext)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setUserDetail({ ...userDetail, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userDetail)
      try {
        const res = await fetch(`http://localhost:5000/api/auth/register`,
      {
        method:"POST",
        headers:{'Content-Type': "application/json"},
        body:JSON.stringify(userDetail)
      });
      if(res.ok){
        const res_data = await res.json()
        //after submit form , empty field
        setUserDetail({username:"",
        email:"",
        phone:"",
        password:""})
        navigate("/signin");
      }
      console.log(res)
      // navigate("/")
      } catch (error) {
        console.log("register", error);
      }
    }
    console.log("signup page")

  return (
    <div>
      <Container>
      <Row className="justify-content-md-center mt-4">
      <Col xs={6}>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleInput} value={userDetail.username} name='username' type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleInput} value={userDetail.email} name='email' type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={handleInput} value={userDetail.phone} name='phone' type="number"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleInput} value={userDetail.password} name='password' type="text"/>
      </Form.Group>

      <div className="d-grid gap-2">
      <Button type='submit' variant="dark">Submit</Button>
      </div>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default SignUp