import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import CarroItem from "./CarroItem";
import { Col, Row } from 'react-bootstrap';

export default function CarroLista(){
    const {cartItems} = useContext(CartContext);
    
    return(
        <Row>
            <Col>
                {cartItems.map((item)=>{
                    return(
                        <CarroItem producto={item} />
                    )
                })}
            </Col>
        </Row>
    );
}