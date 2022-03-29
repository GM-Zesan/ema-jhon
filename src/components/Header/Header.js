import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" />
                <div>
                    <li>
                        <a href="">Home</a>
                        <a href="">Home</a>
                        <a href="">Home</a>
                        <a href="">Home</a>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Header;