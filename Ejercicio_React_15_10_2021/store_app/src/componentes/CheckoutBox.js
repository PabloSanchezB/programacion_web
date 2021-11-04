import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CheckoutBox(){
    const {clearCart, handleCheckout, itemCount, total} = useContext(CartContext);
    
    return(
        <></>
    );
}