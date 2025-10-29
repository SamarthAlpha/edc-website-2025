// src/components/About/About.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AboutCard = ({ icon, title, children, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} className={`about-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
            <i className={`bx ${icon} card-icon`}></i>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

const About = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [introRef, isIntroVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="about">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>About V-EDC</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>Building Tomorrow's Leaders Today</p>
                <p ref={introRef} className={`about-intro ${isIntroVisible ? 'visible' : ''}`}>
                    The V-EDC at VIT Pune is a <span className="highlight">dynamic student-led organization</span> committed to fostering a vibrant culture of <span className="highlight">innovation and entrepreneurship</span>. We provide a <span className="highlight">launchpad for aspiring entrepreneurs</span>, equipping them with the essential <span className="highlight">skills, resources, and network</span> to transform their groundbreaking ideas into <span className="highlight">successful ventures</span>.
                </p>
                <div className="about-content">
                    <AboutCard icon="bx-show" title="Our Vision" delay={0.1}>
                        To build tomorrow's innovators and leaders who use technology to change the world.
                    </AboutCard>
                    <AboutCard icon="bxs-rocket" title="Our Mission" delay={0.2}>
                        To spark the entrepreneurial spirit with startup support, business contests, and expert mentorship.
                    </AboutCard>
                    <AboutCard icon="bxs-bulb" title="Our Objectives" delay={0.3}>
                        To host dynamic workshops, awareness camps, and networking events that turn great ideas into reality.
                    </AboutCard>
                </div>
            </div>
        </section>
    );
};

export default About;