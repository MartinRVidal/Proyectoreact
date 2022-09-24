import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0){
return (
    <>
        <h1>No hay productos en el carro</h1>
        <Link to="/">Volver a tienda</Link>
    </>
);
}

return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }

    <p>
        Total: $ {totalPrice()}
    </p>
    </>
)
}

export default Cart
