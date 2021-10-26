import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductList from './ProductList';

export default function AdmProductos(){
    return(
        <>
        <Row>
            <Col className="col py5 text-center border">
                <h1>Administrar Productos</h1>
                <span>Agregar Producto</span>
            </Col>
        </Row>
        <ProductList />
        </>
    );
}