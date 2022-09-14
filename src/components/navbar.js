import React from 'react';
import logop from '../images/logop.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "../components/NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
return (
    <div className='nav-bar'>
        <img src={logop} alt="" className='img-nav'/>
        <ul className='ul-nav'>
            <li>
                <NavLink to="/" >Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/categoria/remeras">Remeras</NavLink>
            </li>
            <li>
                <NavLink to="/categoria/zapatillas">Zapatillas</NavLink>
            </li>
            <li>
                <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping}/></NavLink>
            </li>
        </ul>
    </div>
)
}

export default NavBar
