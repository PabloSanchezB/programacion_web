import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const AdmProductItem=(props)=>{
    const{id, nombre, Precio}=props.producto

    const onClickElim=(event)=>{
        event.preventDefault();
        props.eliminar(id);
    }

    const onClickEdit=(event)=>{
        event.preventDefault();
        props.aux(props.producto);
        props.showEdit(true);
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
                <Col className="py-4 text-end">
                <Button variant="light" onClick={onClickElim}>Eliminar</Button> 
                <Button variant="dark" onClick={onClickEdit}>Editar</Button>
                </Col>
            </Row>
        </div>
        
    );
}
export default AdmProductItem;