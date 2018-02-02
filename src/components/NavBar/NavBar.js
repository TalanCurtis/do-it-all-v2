import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='NavBar'>
            Navbar comp
            <Link to='/' className='Link'>Home</Link>
            <Link to='/Contacts' className='Link'>Contacts</Link>
        </div>
    )
}

export default Navbar