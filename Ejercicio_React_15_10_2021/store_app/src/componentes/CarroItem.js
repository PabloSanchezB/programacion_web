import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function CarroItem({producto}){
    const {nombre, Precio, cantidad} = producto;
    const {increase, decrease, removeProduct} = useContext(CartContext);

    const showButton = (cant) =>{
        if(cant === 1){
            return(<Button variant="dark">Remover</Button>)
        }else{
            return(<Button variant="dark">Decrease</Button>)
        }
    }

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
                <Col className="text-center">
                    <span>Cantidad: {cantidad}</span>
                </Col>
            </Row>
            <Row>
                <Col className="py-4 text-end">
                <Button variant="light">Increase</Button> {showButton(cantidad)}
                </Col>
            </Row>
        </div>
    );
}