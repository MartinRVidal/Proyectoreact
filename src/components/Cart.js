import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import "./Components.css";
const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "MARTIN",
            email: "martinrodrigovidal@gmail.com",
            phone: "253456435",
            address: "tucuman 432, Cordoba Capital, Argentina."
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => alert( "Codigo de orden: " + id))
    }

    if (cart.length === 0) {
        return (
            <>
                <div className='noprod'>
                    <h1>No hay productos en el carro</h1>
                    <Link to="/" className='terminar'>Volver a tienda</Link>
                </div>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className='fin'>
                <p className='total'>
                    Total: $ {totalPrice()}
                </p>
                <button className='orden' onClick={handleClick}>Generar Orden</button>
            </div>
        </>
    )
}

export default Cart
