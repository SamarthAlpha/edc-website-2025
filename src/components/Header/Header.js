// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/vedc-mainlogo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className="logo-container">
                <img src={logo} alt="V-EDC Logo" className="logo" />
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#events" onClick={closeMenu}>Events</a></li>
                <li><a href="#team" onClick={closeMenu}>Team</a></li>
                <li><a href="#sponsors" onClick={closeMenu}>Sponsors</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <button className="hamburger" id="hamburger-menu" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} onClick={toggleMenu}>
                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
        </nav>
    );
};

export default Header;