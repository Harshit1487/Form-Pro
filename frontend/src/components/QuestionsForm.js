import React, {useContext, useState} from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row, InputGroup, CardBody } from 'react-bootstrap';

import { RootContext } from '../context/RootContext'
// import { formData } from '../../../backend/controllers/form-controller';

const QuestionsForm = () => {
    const {forms, setForms, user, formUserDetail, setFormUserDetail} = useContext(RootContext);
    const questionBody = {
        question: "",
        optionType:"",
        optionsLabel: [''],
        numberOfOptions: 1,
        ans:[false]
    }
    const [questions, setQuestions] = useState([questionBody]);

    const handleChange = (index, e) => { 
        const updatedQuestions = [...questions];
        updatedQuestions[index][e.target.name] = e.target.value;
        setQuestions(updatedQuestions);
   }

   const handleOptionType = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].optionType = value;
    setQuestions(updatedQuestions);
   }

   const handleNumberOfOptionsChange = (index, event) => {
    const updatedQuestions = [...questions];
    const numberOfOptions = parseInt(event.target.value, 10) || 1;
    updatedQuestions[index].numberOfOptions = numberOfOptions;
    updatedQuestions[index].optionsLabel = Array(numberOfOptions).fill('');
    updatedQuestions[index].ans = Array(numberOfOptions).fill(false);
    setQuestions(updatedQuestions);
  };

  const handleOptionLabelChange = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].optionsLabel[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].ans[optionIndex] = !updatedQuestions[questionIndex].ans[optionIndex];
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push(questionBody)
    setQuestions(updatedQuestions)
  }
  const handleSaveQuestion = () => {
    setForms({...forms, formQuestions:questions})
  }

  const handleSaveForm = () => {
    const updatedFormUserDetail = { ...formUserDetail };
    const newForm = { ...forms };
    updatedFormUserDetail.formData.push(newForm);
    console.log(updatedFormUserDetail);
    setFormUserDetail(updatedFormUserDetail);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click form submit button")
    try {
        const res = await fetch(`http://localhost:5000/api/data/form`,{
            method:"POST",    
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formUserDetail)        
        });
        console.log("res from backend form data", res)
        if(res.ok){
            const res_data = await res.json()
            console.log("form data send successfully.", res_data)
            setQuestions([questionBody])
            setForms({
                formTitle:"",
                formDescription:"",
                formQuestions:[]
            })
        }
    } catch (error) {
        console.log("form submit error..", error);
    }
  }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
        {questions.map((item, index)=>{
            return(
                <div key={index}>
                <Card className='mb-2'>
                    <Card.Body>
                        {/* <Form onSubmit={handleSubmit}> */}
                            <Container>
                                <Row>
                                    <Form.Control 
                                    name="question" 
                                    value={item.question}
                                    onChange={(e) => handleChange(index, e)} 
                                    className='mb-3' type="text" placeholder="Question" />
                                </Row>

                                <Row className='mb-2'>
                                    <Col xs='6'>
                                        <Dropdown onSelect={(value) => handleOptionType(index, value)}>
                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                {item.optionType === 'text' ? 'Text Field'
                                                : item.optionType === 'Radio' ? 'Radio' 
                                                : item.optionType === 'Checkbox' ? 'Checkboxes'
                                                : 'Select'}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="Radio">Multiple Choice</Dropdown.Item>
                                                <Dropdown.Item eventKey="Checkbox">Checkboxes</Dropdown.Item>
                                                <Dropdown.Item eventKey="text">Text Field</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col>

                                        {(item.optionType === 'Radio' || item.optionType === 'Checkbox') && (
                                            
                                                <Form.Control type="number" name="numberOfOptions" value={item.numberOfOptions}
                                                onChange={(e) => handleNumberOfOptionsChange(index, e)}  />
                                        )}
                                    </Col>
                                </Row>

                                <Row className='mb-2'>
                                    {(item.optionType === 'Radio' || item.optionType === 'Checkbox') && (item.numberOfOptions > 0) && (
                                        <div> 
                                        {item.optionsLabel.map((option, optionIndex) => (
                                            <div key={optionIndex}>
                                                <InputGroup className="mb-2">
                                                    {item.optionType === 'Radio' &&
                                                        <InputGroup.Radio
                                                            type={item.optionType}
                                                            name="ans"
                                                            checked={item.ans[optionIndex] || false}
                                                            onChange={() => handleCheckboxChange(index, optionIndex)}
                                                        />
                                                    }
                                                    {item.optionType === 'Checkbox' &&
                                                        <InputGroup.Checkbox
                                                            type={item.optionType}
                                                            name="ans"
                                                            checked={item.ans[optionIndex] || false}
                                                            onChange={() => handleCheckboxChange(index, optionIndex)}
                                                        />
                                                    }
                                                    <Form.Control
                                                    key={optionIndex}
                                                    type="text"
                                                    placeholder={`Option ${optionIndex + 1}`}
                                                    value={option}
                                                    onChange={(e) => handleOptionLabelChange(index, optionIndex, e)}
                                                    />
                                                </InputGroup>
                                            </div>
                                        ))}
                                        </div>
                                    )}
                                </Row>

                                <Row className='mb-3'>
                                    {item.optionType === 'text' && (
                                        <div>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter answer"
                                                name="ans"
                                                value={item.answer}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                        </div>
                                    )}
                                </Row>

                                <Row>
                                    <Col>
                                        <Button variant="outline-dark" onClick={()=>{handleAddQuestion()}}>Add more Question</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="dark" onClick={()=>{handleSaveQuestion()}}>Save Question</Button>
                                    </Col>
                                </Row>
                            </Container>
                        {/* </Form> */}
                    </Card.Body>
                </Card>
                </div>
            )
        })}
        <Button className='me-3' variant="dark" onClick={()=>{handleSaveForm()}}>Save Form</Button>
        <Button variant="dark" type='submit'>Submit Form</Button>
        </Form>
        
    </div>
  )
}

export default QuestionsForm