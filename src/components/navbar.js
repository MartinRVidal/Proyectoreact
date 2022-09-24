import React from 'react';
import logop from '../images/logop.jpg';
import "../components/NavBar.css";
import { NavLink } from 'react-router-dom';
import banner from '../images/banner.png';
import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <>
            <div className='nav-bar'>
                <img src={logop} alt="" className='img-nav' />
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
                        <NavLink to="/cart"><CartWidget/></NavLink>
                    </li>
                </ul>
            </div>
            <div className='div-banner'>
                <img src={banner} alt="" className='img-banner' />
            </div>
        </>
    )
}

export default NavBar
