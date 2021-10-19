import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';


const GridProduct=()=>{
    const items=[
        {id:1,nombre:'Buffalo - Striploin',Precio:'39.11'},
        {id:1,nombre:'Bacardi Brezzer - Tropical',Precio:'257.92'},
        {id:1,nombre:'Wine - Gato Negro Cabernet',Precio:'51.01'},
        {id:1,nombre:'Cabbage - Nappa',Precio:'250.90'},
        {id:1,nombre:'Sping Loaded Cup Dispenser',Precio:'175.85'},
        {id:1,nombre:'Bread Malt',Precio:'82.61'},
        {id:1,nombre:'Glass Clear 8 Oz',Precio:'201.10'},
        {id:1,nombre:'Sour Puss Raspberry',Precio:'134.99'},
        {id:1,nombre:'Pork - Chop, Frenched',Precio:'199.16'}
    ]
    return(
        <>
        <Row>
            <Col className="border  m-1">
                <ProductItem producto = {items[0]}/>
            </Col>
            <Col className="border m-1">
            <ProductItem producto = {items[1]}/>
            </Col>
            <Col className="border m-1">
            <ProductItem producto = {items[2]}/>
            </Col>
        </Row>
        <Row>
            <Col className="border m-2">
            <ProductItem producto = {items[3]}/>
            </Col>
            <Col className="border m-2">
            <ProductItem producto = {items[4]}/>
            </Col>
            <Col className="border m-2">
            <ProductItem producto = {items[5]}/>
            </Col>
        </Row>
        <Row>
            <Col className="border m-2">
            <ProductItem producto = {items[6]}/>
            </Col>
            <Col className="border m-2">
            <ProductItem producto = {items[7]}/>
            </Col>
            <Col className="border m-2">
            <ProductItem producto = {items[8]}/>
            </Col>
        </Row>
        </>
    );
}
export default GridProduct