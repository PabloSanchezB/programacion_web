import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"; 

const Header =()=>{
    return(
        <Row>
            <Col className="col py5 text-center border">
                <Link to='/store'>Store</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to='/about'>About</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to='/cart'>Cart</Link>
            </Col>
        </Row>
    );
}

export default Header