import React, { useContext } from 'react'
import './Navbar.css';
import download from '../Assets/download.png';
import Tech from '../Assets/Tech.jpg';
import PC from '../Assets/PC.png';
import Laptop from '../Assets/laptop.jpg'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext);

    return (

        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Laptop} alt="" />
                <p>Expanse</p>
            </div>

            <ul className="nav-menu">
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/phones'>Phone</Link></li>
                <li><Link to='/ipads'>iPad</Link></li>
                <li><Link to='/laptops'>Laptop</Link></li>
            </ul>

            <div className="nav-login-cart">
                <Link to='login'><button>
                    Login
                </button></Link>
                <Link to='/cart'><img src={download}></img></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
