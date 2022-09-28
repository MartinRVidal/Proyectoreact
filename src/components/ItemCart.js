import "./Components.css";
import React from 'react';
import { useCartContext } from "../Context/CartContext";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <div className="itemCart">
                <img src={product.image} alt={product.title} />
                <div className="pcart">
                    <p>Titulo : {product.title}</p>
                    <p>Cantidad : {product.quantity}</p>
                    <p>Precio /U : $ {product.price}</p>
                    <p>SubTotal : $ {product.quantity * product.price}</p>
                    <button className="terminar" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart
