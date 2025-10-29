// src/components/Header/Header.jsx

import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/vedc-mainlogo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#events", text: "Events" },
        { href: "#team", text: "Team" },
        { href: "#sponsors", text: "Sponsors" },
        { href: "#gallery", text: "Gallery" },
        { href: "#contact", text: "Contact" },
    ];

    return (
        <nav className={`
            fixed top-0 w-full px-[5%] z-[1000] flex justify-between items-center
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            backdrop-blur-xl bg-darker/70 border-b border-primary/10
            ${isScrolled ? 'py-4 bg-darker/90 shadow-2xl shadow-black/50' : 'py-6'}
        `}>
            {/* Logo */}
            <div className="h-14 transition-all duration-500 animate-logo-float">
                <img src={logo} alt="V-EDC Logo" className="h-full filter drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(99,102,241,1)] hover:scale-110 hover:rotate-6" />
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex gap-10 list-none">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a href={link.href} className="text-light font-medium decoration-none relative transition-all duration-300 py-2 hover:text-primary hover:-translate-y-0.5
                            before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5
                            before:bg-gradient-to-r before:from-primary before:to-secondary
                            before:transition-all before:duration-400 before:ease-[cubic-bezier(0.4,0,0.2,1)]
                            before:-translate-x-1/2 hover:before:w-full
                        ">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* Hamburger Menu Button */}
            <button 
                className="md:hidden bg-none border-none text-light text-4xl cursor-pointer z-[1001] transition-transform duration-300 hover:scale-110"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
            
            {/* Mobile Nav Links */}
            <div className={`
                fixed top-0 left-0 w-full h-screen bg-darker/95 backdrop-blur-lg
                flex flex-col justify-center items-center gap-12
                transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
                md:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <ul className="flex flex-col items-center gap-12 list-none">
                    {navLinks.map((link, index) => (
                         <li key={link.href} className="overflow-hidden">
                            <a 
                                href={link.href} 
                                onClick={closeMenu}
                                className={`text-3xl text-light font-medium transition-all duration-500 delay-200
                                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                                style={{ transitionDelay: `${isMenuOpen ? index * 50 + 100 : 0}ms` }}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;