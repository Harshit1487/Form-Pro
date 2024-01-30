import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
// import { RootContext } from "../context/RootContext";

import QuestionsForm from './QuestionsForm'
import { RootContext } from '../context/RootContext'

const CreateForm = () => {
    const {forms, setForms} = useContext(RootContext);

    const handleChange = (e) => {
        setForms({...forms, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <Container>
            <Row className="justify-content-md-center mt-4">
                {/* {forms.map((form, index) => {})} */}
                    <Col xs='8'>
                        <Form>
                            <Card bg='light' text='dark' className='mb-3 border-5 border-bottom-0 border-start-0 border-end-0 border-primary mt-3'>

                                <Card.Title className='mt-2'>
                                    <Form.Control className='border-0 fs-6 fw-bold w-80' 
                                    type="text" 
                                    placeholder="Form title"
                                    name="formTitle"
                                    value={forms.formTitle}
                                    onChange={e => {handleChange(e)}} />
                                </Card.Title>

                                <Card.Subtitle className='mt-2'>
                                    <Form.Control className='border-0' 
                                    type="text" 
                                    placeholder="Form description" 
                                    name="formDescription"
                                    value={forms.formDescription}
                                    onChange={e => {handleChange(e)}} />
                                </Card.Subtitle>
                            </Card>
                        </Form>
                     <QuestionsForm />   
                    </Col>
                
            </Row>
            
            
            {/* <Row className='mt-2 mb-4'>
                        <Col><Button variant="dark">Add more question</Button></Col>
                        <Col><Button variant="outline-dark">Submit</Button></Col>
                        </Row> */}
        </Container>
    </div>
  )
}

export default CreateForm