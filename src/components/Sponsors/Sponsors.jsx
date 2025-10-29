// src/components/Sponsors/Sponsors.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Sponsors = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    const sponsorLogos = [
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+1",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+2",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+3",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+4",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+5",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+6",
        "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+7",
    ];

    // Duplicate for seamless scroll effect
    const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

    return (
        <section id="sponsors" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>Our Sponsors</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>Powering Innovation Together</p>
            </div>
            <div className="sponsor-scroller">
                <div className="scroller-inner">
                    {duplicatedLogos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Sponsor Logo ${index + 1}`} className="sponsor-logo" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;