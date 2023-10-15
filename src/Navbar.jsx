import React, { useState } from 'react';
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import close from './assets/close.svg'
import menu from './assets/menu.svg'

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = (value) => {
        setOpen(value);
    }

    return (
        <>
        <nav className={`primary-nav ${!open ? 'hidden' : ''}`}>
            <ul className='nav-links'>
                <CustomLink to="/" handleOpen={handleOpen}>Home</CustomLink>
                <CustomLink to="/about" handleOpen={handleOpen}>About</CustomLink>
                <CustomLink to="/projects" handleOpen={handleOpen}>Projects</CustomLink>
                <CustomLink to="/publications" handleOpen={handleOpen}>Publications</CustomLink>
                <CustomLink to="/contact" handleOpen={handleOpen}>Contact</CustomLink>
            </ul>
        </nav>
        <div className='nav-button' onClick={() => handleOpen(!open)}><img src={open ? close : menu} alt="menu" width={30} height={30}/></div>
        </>
    );
}

function CustomLink({ to, handleOpen, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: true})
    return <li className={match ? "link active" : "link"} onClick={() => handleOpen(false)}><Link to={to} {...props}>{children}</Link></li>
}

export default Navbar;
