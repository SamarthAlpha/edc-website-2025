// src/components/Footer/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="contact-container-full">
                <div className="contact-info">
                    <p className="college-name">Vishwakarma Institute of Technology</p>
                    <p className="address">666 Upper Indiranagar, Bibwewadi, Pune, Maharashtra - 411 037</p>
                    <a href="mailto:ecell@vit.edu" className="email">ecell@vit.edu</a>
                </div>
                <div className="social-section">
                    <h4 className="social-tagline">Follow Our Journey</h4>
                    <div className="social-links">
                        <a href="#contact" className="social-link" title="Instagram"><i className='bx bxl-instagram'></i></a>
                        <a href="#contact" className="social-link" title="Facebook"><i className='bx bxl-facebook-square'></i></a>
                        <a href="#contact" className="social-link" title="Twitter"><i className='bx bxl-twitter'></i></a>
                        <a href="#contact" className="social-link" title="YouTube"><i className='bx bxl-youtube'></i></a>
                        <a href="#contact" className="social-link" title="LinkedIn"><i className='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
            </div>
            <p className="footer-copyright">&copy; 2025 Designed by V-EDC | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;