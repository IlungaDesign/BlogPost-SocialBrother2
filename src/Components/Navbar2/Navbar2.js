import './Navbar2.css'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink} from "react-router-dom";
import logo from '../../Images/logo.png';

const Navbar2 = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <header className='header'>
            <nav className='mask'>
                <NavLink exact to="/">
                    <img src={logo} alt="Logo" className="logo-Social-Brothers"/>
                </NavLink>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />)
                        : (<FaBars size={30} style={{ color: 'white' }} />)}
                </div>

                <ul className={click ? "stacked-group active" : "stacked-group"}>
                    <li className='nav-item' >
                        <NavLink exact to="/" className="home" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to="/Blog" className="blog"
                                 activeClassName="active-link"
                        >Blog</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar2;
