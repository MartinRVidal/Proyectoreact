import React from 'react'
import banner from '../images/banner.png'
import "../components/ItemListContainer.css"

const ItemListContainer = () => {
return (
    <div className='div-banner'>
        <img src={banner} alt="" className='img-banner'/>
    </div>
)
}

export default ItemListContainer
