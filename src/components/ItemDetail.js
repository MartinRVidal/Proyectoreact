import React from 'react';
import "./Components.css";
import ItemCount from '../components/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    };

    return (
        <div className='container'>
            <img className='detail_image' src={data.image} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p className='precio'>Precio: $ {data.price}</p>
                {
                    goToCart
                        ? <div className='ter-seg'>
                            <Link to="/cart" className='terminar'>Terminar compra</Link>
                            <Link to="/" className='seguir'>Seguir comprando</Link>
                        </div>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail
