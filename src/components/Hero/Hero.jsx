// src/components/Hero/Hero.jsx

import React, { useState, useEffect, useRef } from 'react';
import heroLogo from '../../assets/images/vedc-mainlogo.png';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

// --- Typewriter Component ---
const Typewriter = () => {
    const [text, setText] = useState('');
    const words = ['Inspire.', 'Empower.', 'Innovate.'];

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        function type() {
            const currentWord = words[wordIndex];
            const typeSpeed = isDeleting ? 75 : 120;

            if (isDeleting) {
                setText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                timeoutId = setTimeout(type, 1000); // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timeoutId = setTimeout(type, 500); // Pause before new word
            } else {
                timeoutId = setTimeout(type, typeSpeed);
            }
        }
        
        type(); // Start the effect
        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, []);

    return (
        <p className="flex justify-center items-center h-10 text-xl md:text-2xl text-slate-400 font-medium mb-8">
            <span>{text}</span>
            <span className="inline-block w-1 h-7 md:h-8 ml-2 bg-primary animate-blink" />
        </p>
    );
};

// --- Animated Stat Card Component ---
const StatCard = ({ target, title }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
    const countRef = useRef(null);

    useEffect(() => {
        if (isVisible && countRef.current) {
            let start = 0;
            const end = target;
            // Ensure duration is reasonable and avoid division by zero
            if (end === 0) {
                countRef.current.textContent = "0";
                return;
            }
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start += 1;
                countRef.current.textContent = start.toLocaleString();
                if (start >= end) {
                    countRef.current.textContent = end.toLocaleString(); // Ensure it ends on the exact number
                    clearInterval(timer);
                }
            }, stepTime);
            
            return () => clearInterval(timer);
        }
    }, [isVisible, target]);

    return (
        <div ref={ref} className="flex-1 text-center bg-slate-900/50 backdrop-blur-sm border border-primary/20 rounded-2xl px-2 py-3 md:px-6 md:py-4">
            <h3 className="text-2xl md:text-4xl font-bold text-primary leading-none">
                <span ref={countRef}>0</span>
                <span className="text-xl md:text-2xl align-top ml-px">+</span>
            </h3>
            <p className="text-xs md:text-base text-slate-300 font-medium mt-1 whitespace-nowrap">{title}</p>
        </div>
    );
};

// --- Main Hero Component ---
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="z-10 max-w-7xl px-8 flex flex-col items-center text-center">
                
                {/* Logo with new animation */}
                <div className="mb-6">
                    <img 
                        src={heroLogo} 
                        alt="V-EDC Logo" 
                        className="
                            w-[300px] md:w-[500px]
                            animate-logo-entrance-then-pulse
                        " 
                    />
                </div>

                {/* Typewriter */}
                <Typewriter />

                {/* CTA Button */}
                <a 
                    href="#about"
                    className="
                        inline-block py-3 px-8 bg-gradient-to-r from-primary to-secondary text-white 
                        font-semibold rounded-full text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                        shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60
                        hover:-translate-y-1 hover:scale-105 relative overflow-hidden
                        before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full
                        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
                        before:transition-all before:duration-700 before:ease-in-out hover:before:left-full
                    "
                >
                    Explore Our Vision
                </a>
                
                {/* Stats */}
                <div className="flex justify-center gap-2 md:gap-4 mt-12 w-full max-w-3xl">
                    <StatCard target={30} title="Events Organized" />
                    <StatCard target={5000} title="Student Engagement" />
                    <StatCard target={600} title="Active Members" />
                </div>
            </div>
        </section>
    );
};

export default Hero;