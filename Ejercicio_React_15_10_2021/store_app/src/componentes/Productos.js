import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap';
import GridProduct from './GridProduct';

const Productos =()=>{
    return(
        <>
        <Row>
            <Col className="col py5 text-center border">
                <h1>Store </h1>
                <span>This is the store Page</span>
            </Col>
        </Row>
        <Row>
            <Col className="col-8 text-start">
                <span>10 Products</span>
            </Col>
            <Col className="col-3 text-end">
                <Form.Control type="email" placeholder="Search Product" />
            </Col>
        </Row>
        <GridProduct/>
        </>
    );
}

export default Productos