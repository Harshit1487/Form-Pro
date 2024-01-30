import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

import { RootContext } from "../context/RootContext";

const SignIn = () => {
    const {login, setLogin, storeTokenInLS} = useContext(RootContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({email:"", password:""})
    console.log(login)

    const handleInput = (e) => {
      setUser({ ...user, [e.target.name] : e.target.value})
  }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
          const res = await fetch(`http://localhost:5000/api/auth/login`,
      {
        method:"POST",
        headers:{'Content-Type': "application/json"},
        body:JSON.stringify(user)
      });
      console.log("login", res)
      if(res.ok){
        const res_data = await res.json()
        storeTokenInLS(res_data.token)
        console.log("login successful");
        setUser({email:"", password:""})
        navigate("/")
      }
        } catch (error) {
          console.log("login", error);
        }
        setLogin(true)
        navigate("/")
    }

  return (
    <>
     
      <Container>
      <Row className="justify-content-md-center mt-4">
      <Col xs={6}>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleInput} value={user.email} name='email' type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleInput} value={user.password} name='password' type="password"/>
      </Form.Group>
      <div className="d-grid gap-2">
      <Button type="submit" variant="dark">Submit</Button>
      </div>
    </Form>
    </Col>
    </Row>
    </Container>
    
    </>
  );
};

export default SignIn;
