import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ProductItem=(props)=>{
    const{nombre, Precio}=props.producto
    return(
        <div className="item">
            <Row className="">
                <Col className="text-start">
                <span>{nombre}</span>
                </Col>
            </Row>
            <Row>
                <Col className="text-start">
                    <h4>${Precio}</h4>
                </Col>
            </Row>
            <Row>
                <Col className="py-4 text-end">
                <Button variant="light">Details</Button> <Button variant="dark">Add To Cart</Button>{' '}
                </Col>
            </Row>
        </div>
        
    );
}
export default ProductItem;