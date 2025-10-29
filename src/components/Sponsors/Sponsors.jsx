// src/components/Sponsors/Sponsors.jsx

import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

const SponsorLogo = ({ src, alt }) => (
    <img 
        src={src} 
        alt={alt} 
        className="h-16 filter grayscale brightness-75 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:scale-110" 
    />
);

const Sponsors = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    const logos = [
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+1", alt: "Sponsor 1" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+2", alt: "Sponsor 2" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+3", alt: "Sponsor 3" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+4", alt: "Sponsor 4" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+5", alt: "Sponsor 5" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+6", alt: "Sponsor 6" },
        { src: "https://placehold.co/200x100/FFFFFF/020617?text=Sponsor+7", alt: "Sponsor 7" },
    ];
    
    // Duplicate the logos for a seamless scroll effect
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section id="sponsors" className="py-32 bg-slate-900/30">
            <div className="container mx-auto px-[5%]">
                <h2
                    ref={titleRef}
                    className={`
                        text-4xl md:text-6xl font-extrabold text-center mb-4
                        bg-gradient-to-r from-light to-primary bg-clip-text text-transparent
                        transition-all duration-700
                        ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Our Sponsors
                </h2>
                <p
                    ref={subtitleRef}
                    className={`
                        text-center text-lg text-slate-400 mb-16
                        transition-all duration-700 delay-200
                        ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Powering Innovation Together
                </p>
            </div>
            
            {/* Scroller Container */}
            <div 
                className="group w-full overflow-hidden 
                    [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
            >
                <div className="flex gap-12 animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedLogos.map((logo, index) => (
                        <SponsorLogo key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;