import React, {useState} from "react";
import AdmProductItem from "./AdmProductItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductForm from "./ProductForm";
import EditProdForm from "./EditProdForm";

export default function ProductList(){
    const itemsInitial = [];

    const [items, setItems] = useState(itemsInitial);

    const [showEditForm, setShowEditForm] = useState(false);

    const [auxItem, setAuxItem] = useState({});

    const [idCount, setIdCount] = useState(1);

    const alEnviarForm = (itemFromForm) => {
        const idI = idCount;
        const newItem = {id: idI, ...itemFromForm};
        setItems([newItem, ...items]);
        setIdCount(idCount+1);
    }

    const alEliminar = (idItem) => {
        setItems(items.filter(item => item.id !== idItem));
    }

    const alModificar = (itemFromForm) => {
        setItems(items.map(item => {
            if(item.id === itemFromForm.id){
                return itemFromForm;
            }else{
                return item;
            }
        }));
        setShowEditForm(false);
    }

    const showForm = (showEdit)=>{
        if(!showEdit){
            return(<ProductForm agregar={alEnviarForm} />);
        }else{
            return(<EditProdForm cambiar={alModificar} editado={auxItem}/>);
        }
    }

    return (
        <> 
        <Row>
            {showForm(showEditForm)}
        </Row>
        <Row className="border"> 
            <Col>
            {
            
                items.map(item => (
                    <>
                        <AdmProductItem producto={item} eliminar={alEliminar} showEdit={setShowEditForm} 
                        aux={setAuxItem}/> 
                    </>
                    )
                )
            
            }
            </Col>
        </Row>
        </>
    );
}

