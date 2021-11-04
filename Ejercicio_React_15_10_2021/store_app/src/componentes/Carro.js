import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarroLista from "./CarroLista";
import CheckoutBox from "./CheckoutBox";

export default function Carro(){
    return(
        <>
        <Row>
            <Col className="col py5 text-center border">
                <h1>Cart </h1>
                <span>This is the cart Page</span>
            </Col>
        </Row>
        <Row>
            <Col className="col-8">
                <CarroLista />
            </Col>
            <Col className="col-4">
                <CheckoutBox />
            </Col>
        </Row>
        </>
    );
}