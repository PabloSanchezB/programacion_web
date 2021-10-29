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
        <Row className="g-3">
            {items.map((item) => {
                return(
                    <Col className="col-4">
                        <div className="border px-3 pt-2">
                        <ProductItem producto = {item}/>
                        </div>
                    </Col>
                )
            })}
        </Row>

    );
}
export default GridProduct