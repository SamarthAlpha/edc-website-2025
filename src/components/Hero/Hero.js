// src/components/Hero/Hero.js
import React, { useState, useEffect, useRef } from 'react';
import heroLogo from '../../assets/images/vedc-mainlogo.png';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// Utility for number animation
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const StatCard = ({ target, title }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            animateValue(ref.current, 0, target, 2500);
        }
    }, [target]);

    return (
        <div className="stat-card">
            <h3 ref={ref} className="stat-number" data-target={target}>0</h3>
            <p className="stat-title">{title}</p>
        </div>
    );
};


const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const words = ['Inspire.', 'Empower.', 'Innovate.'];

    const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            const typeSpeed = isDeleting ? 75 : 120;

            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        };
        const typingInterval = setInterval(type, 120);
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-logo-wrapper">
                    <img src={heroLogo} alt="V-EDC Logo" className="hero-logo" />
                </div>
                <p className="tagline">
                    <span id="typewriter-text">{typedText}</span><span className="cursor"></span>
                </p>
                <a href="#about" className="cta-button">Explore Our Vision</a>

                <div ref={statsRef} className={`stats-container ${isStatsVisible ? 'visible' : ''}`}>
                    {isStatsVisible && (
                        <>
                            <StatCard target={30} title="Events Organized" />
                            <StatCard target={5000} title="Student Engagement" />
                            <StatCard target={600} title="Active Members" />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;