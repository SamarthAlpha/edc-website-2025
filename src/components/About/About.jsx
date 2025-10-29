// src/components/About/About.jsx

import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

// A sub-component for the cards to keep the main component clean
const AboutCard = ({ icon, title, children, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`
                group bg-slate-900/60 p-12 rounded-2xl backdrop-blur-lg 
                border border-primary/20 relative overflow-hidden
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:-translate-y-4 hover:scale-[1.02] hover:border-primary 
                hover:shadow-2xl hover:shadow-primary/40
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            {/* Shiny sweep effect */}
            <div className="
                absolute top-0 -translate-x-full w-full h-full 
                bg-gradient-to-r from-transparent via-primary/20 to-transparent
                transition-transform duration-700 ease-in-out
                group-hover:translate-x-full
            " />

            <i className={`
                bx ${icon} text-4xl mb-6 block text-primary 
                filter drop-shadow-[0_5px_15px_rgba(99,102,241,0.5)]
                group-hover:animate-icon-spin
            `}></i>
            <h3 className="text-2xl font-bold mb-4 text-light">{title}</h3>
            <p className="text-slate-300 leading-relaxed">{children}</p>
        </div>
    );
};


const About = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [introRef, isIntroVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="about" className="py-32">
            <div className="container mx-auto px-[5%] max-w-7xl">
                <h2
                    ref={titleRef}
                    className={`
                        text-4xl md:text-6xl font-extrabold text-center mb-4 
                        bg-gradient-to-r from-light to-primary bg-clip-text text-transparent
                        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    About V-EDC
                </h2>
                <p
                    ref={subtitleRef}
                    className={`
                        text-center text-lg text-slate-400 mb-16
                        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200
                        ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Building Tomorrow's Leaders Today
                </p>
                <p
                    ref={introRef}
                    className={`
                        max-w-4xl mx-auto mb-16 text-center text-xl text-slate-300 leading-relaxed
                        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-300
                        ${isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    The V-EDC at VIT Pune is a <span className="text-primary font-semibold">dynamic student-led organization</span> committed to fostering a vibrant culture of <span className="text-primary font-semibold">innovation and entrepreneurship</span>. We provide a <span className="text-primary font-semibold">launchpad for aspiring entrepreneurs</span>, equipping them with the essential <span className="text-primary font-semibold">skills, resources, and network</span> to transform their groundbreaking ideas into <span className="text-primary font-semibold">successful ventures</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <AboutCard icon="bx-show" title="Our Vision" delay={100}>
                        To build tomorrow's innovators and leaders who use technology to change the world.
                    </AboutCard>
                    <AboutCard icon="bxs-rocket" title="Our Mission" delay={200}>
                        To spark the entrepreneurial spirit with startup support, business contests, and expert mentorship.
                    </AboutCard>
                    <AboutCard icon="bxs-bulb" title="Our Objectives" delay={300}>
                        To host dynamic workshops, awareness camps, and networking events that turn great ideas into reality.
                    </AboutCard>
                </div>
            </div>
        </section>
    );
};

export default About;