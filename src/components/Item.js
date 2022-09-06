import React from 'react';
import "./Item.css";

const Item = ({ info }) => {
    return (
        <a href="" className='producto'>
            <img src={info.image} alt="imagen producto"/>
            <p>{info.title}</p>
        </a>
    )
}

export default Item
