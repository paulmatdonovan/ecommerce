import React from 'react'
import './Navbar.css';
import download from '../Assets/download.png';
import Tech from '../Assets/Tech.jpg';
import PC from '../Assets/PC.png';

export const Navbar = () => {
    return (

        <div className='navbar'>
            <div className='nav-logo'>
                <img src="" alt="" />
                <p>Expanse</p>
            </div>

            <ul className="nav-menu">
                <li>Shop</li>
                <li>Phone</li>
                <li>iPad</li>
                <li>Laptop</li>
            </ul>

            <div className="nav-login-cart">
                <button>
                    Login
                </button>
                <img src={download}></img>
            </div>
        </div>
    )
}
