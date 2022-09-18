import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../components/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext ();

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
                <p>{data.price}</p>
                {
                    goToCart
                    ? <Link to="/cart">Terminar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail
