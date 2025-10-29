// src/components/Footer/Footer.jsx

import React from 'react';
import logo from '../../assets/images/vedc-mainlogo.png'; // Make sure to import the logo

// Updated social links data with the correct Instagram hover class
const socialLinks = [
    { 
        title: "Instagram", 
        icon: "bxl-instagram", 
        href: "#", 
        // Using an arbitrary value to create the exact radial gradient from the original CSS
        hoverClass: "hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] hover:shadow-[#d6249f]/50" 
    },
    { title: "Facebook", icon: "bxl-facebook-square", href: "#", hoverClass: "hover:bg-[#1877F2] hover:shadow-[#1877F2]/50" },
    { title: "Twitter", icon: "bxl-twitter", href: "#", hoverClass: "hover:bg-[#1DA1F2] hover:shadow-[#1DA1F2]/50" },
    { title: "YouTube", icon: "bxl-youtube", href: "#", hoverClass: "hover:bg-[#FF0000] hover:shadow-[#FF0000]/50" },
    { title: "LinkedIn", icon: "bxl-linkedin-square", href: "#", hoverClass: "hover:bg-[#0A66C2] hover:shadow-[#0A66C2]/50" },
];

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark pt-20 pb-10 px-[5%] text-center border-t border-primary/20 z-10 relative">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 text-center md:text-left">
                    
                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-xl font-medium text-slate-200 mb-2">Vishwakarma Institute of Technology</p>
                        <p className="text-base text-slate-400 mb-3">666 Upper Indiranagar, Bibwewadi, Pune, Maharashtra - 411 037</p>
                        <a href="mailto:ecell@vit.edu" className="text-primary text-lg hover:text-secondary transition-colors duration-300">
                            ecell@vit.edu
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-xl font-medium text-slate-200 mb-4">Follow Our Journey</h4>
                        <div className="flex gap-4">
                            {socialLinks.map(link => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    title={link.title}
                                    className={`
                                        w-12 h-12 rounded-full bg-primary/10 border border-primary/20
                                        flex items-center justify-center text-2xl text-light
                                        transition-all duration-300 ease-in-out
                                        hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:border-transparent
                                        ${link.hoverClass}
                                    `}
                                >
                                    <i className={`bx ${link.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <hr className="w-full max-w-4xl mx-auto border-primary/20 my-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center gap-6">
                    <a href="#home">
                        <img src={logo} alt="V-EDC Logo" className="h-12 opacity-60 transition-opacity hover:opacity-90" />
                    </a>
                    <p className="text-slate-400">&copy; 2025 Designed by V-EDC | All Rights Reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;