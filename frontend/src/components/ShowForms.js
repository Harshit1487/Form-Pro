import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';

import { Card, Col, Container, Row } from "react-bootstrap";

import { RootContext } from "../context/RootContext";

const ShowForms = () => {
  const { formUserDetail } = useContext(RootContext);
  console.log("formdata from showform", formUserDetail);
  return (
    <div>

      {formUserDetail.formData.map((item, index) => {
        return (
          <Link style={{textDecoration: 'none'}} to={`/showquestions/${index}`} key={index}>
            <Row className="justify-content-md-center mt-4">
              <Col xs="6">
                <Card bg="light" text="dark" className="mt-2" body>
                  <strong>Form Title:</strong> {item.formTitle}
                  <br />
                  <strong>Form Description:</strong> {item.formDescription}
                </Card>
              </Col>
            </Row>
          </Link>
        );
      })}
    </div>
  );
};

export default ShowForms;
