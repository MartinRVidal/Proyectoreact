import React from 'react';
import banner from '../images/banner.png';
import "../components/ItemListContainer.css";
import ItemCount from '../components/ItemCount';


const ItemListContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`); 
    }


return (
    <div>
    <div className='div-banner'>
        <img src={banner} alt="" className='img-banner'/>
    </div>
    <ItemCount initial={1} stock={7} onAdd={onAdd} />
    </div>
)
}

export default ItemListContainer
