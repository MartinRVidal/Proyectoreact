import React from 'react';
import { Link } from 'react-router-dom';
import "./Components.css";

const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} className='producto'>
            <img src={info.image} alt="imagen producto" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item
