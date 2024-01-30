import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Card, Col, Container, Form, Row } from "react-bootstrap";

import { RootContext } from "../context/RootContext";

const ShowQuestions = () => {
  const { formUserDetail } = useContext(RootContext);
  const { formId } = useParams();
  return (
    <div>
      {formUserDetail.formData[formId]?.formQuestions.map((item, ind) => {
        return (
          <Row className="justify-content-md-center">
                    <Col xs='6'>
          <Card className="mt-3" key={ind}>
            <Card.Body>
              <Container>
                <Row>{`${ind+1}. ${item.question}`}</Row>

                {item.optionType === "text" ? (
                  <Row>{item.ans}</Row>
                ) : (
                    <Form>
                    {item.optionsLabel.map((opt, optInd) => (
                      <Row key={optInd}>
                        {String.fromCharCode(65+optInd)}
                        <Form.Check
                        label={`${opt}`}
                        name="group1"
                        type={item.optionType}
                        />
                      </Row>
                    ))}
                  </Form>
                )}
           
              </Container>
            </Card.Body>
          </Card>
          </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default ShowQuestions;
