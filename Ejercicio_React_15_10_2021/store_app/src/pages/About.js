import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About(){
    return(
        <Row>
            <Col className="col py5 text-center border">
                <h1>About </h1>
                <span>This is the about Page</span>
            </Col>
        </Row>
    );
}