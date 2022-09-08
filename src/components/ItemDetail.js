import React from 'react';
import "./ItemDetail.css";

const ItemDetail = ({data}) => {
    return (
        <div className='container'>
            <img className='detail_image' src={data.image} alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>{data.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail
