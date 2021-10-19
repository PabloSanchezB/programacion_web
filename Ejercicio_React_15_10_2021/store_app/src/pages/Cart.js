import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Cart(){
    return(
        <Row>
            <Col className="col py5 text-center border">
                <h1>Cart </h1>
                <span>This is the cart Page</span>
            </Col>
        </Row>
    );
}