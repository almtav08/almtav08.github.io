import React from 'react';
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='primary-nav'>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/publications">Publications</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: true})
    return <li className={match ? "link active" : "link"}><Link to={to} {...props}>{children}</Link></li>
}

export default Navbar;
