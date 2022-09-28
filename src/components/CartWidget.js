import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../Context/CartContext';
import "./Components.css";

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{totalProducts() || ""}</span>
        </>
    )
}

export default CartWidget
