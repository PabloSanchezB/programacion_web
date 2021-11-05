import React, {useContext} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarroLista from "./CarroLista";
import CheckoutBox from "./CheckoutBox";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom"; 

export default function Carro(){
    const {checkout} = useContext(CartContext);

    const showCheck = (val) =>{
        if(val){
            return(
                <Row>
                    <Col className="col-12 text-center"><h3>¡Gracias por comprar!</h3></Col>
                    <Col className="col-12 text-center"><Link to='/'>Seguir Comprando</Link></Col>
                </Row>
            );
        }else{
            return(
                <Row>
                    <Col className="col-8">
                        <CarroLista />
                    </Col>
                    <Col className="col-4">
                        <CheckoutBox />
                    </Col>
                </Row>
            );
        }
    }

    return(
        <>
        <Row>
            <Col className="col py5 text-center border">
                <h1>Cart </h1>
                <span>This is the cart Page</span>
            </Col>
        </Row>
        {showCheck(checkout)}
        </>
    );
}