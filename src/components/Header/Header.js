import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" />
                <div>
                    <li>
                        <Link to="/">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/signup">Signup</Link>
                        {
                            user ?
                                <button onClick={handleSignOut}>Sign out</button>
                                :
                            <Link to="/login">Login</Link>
                        }
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Header;