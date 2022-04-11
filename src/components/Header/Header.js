import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" />
                <div>
                    <li>
                        <Link to="/">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Header;