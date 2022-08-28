import React from 'react';
import logop from '../images/logop.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "../components/NavBar.css";

const NavBar = () => {
return (
    <div className='nav-bar'>
        <img src={logop} alt="" className='img-nav'/>
        <ul className='ul-nav'>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Tienda</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
            <li>
                <a href='#'><FontAwesomeIcon icon={faCartShopping}/></a>
            </li>
        </ul>
    </div>
)
}

export default NavBar
