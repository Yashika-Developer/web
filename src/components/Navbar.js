// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Navbar.css"
function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
