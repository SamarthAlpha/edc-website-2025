// src/components/Gallery/Gallery.jsx

import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

const allGalleryImages = [
    { src: 'https://placehold.co/600x800/6366f1/FFF?text=E-Summit', alt: "E-Summit" },
    { src: 'https://placehold.co/600x800/ec4899/FFF?text=Workshop', alt: "Workshop" },
    { src: 'https://placehold.co/600x800/f59e0b/FFF?text=Networking', alt: "Networking" },
    { src: 'https://placehold.co/600x800/10b981/FFF?text=Team+Work', alt: "Team Work" },
    { src: 'https://placehold.co/600x800/ef4444/FFF?text=Speaker', alt: "Speaker" },
    { src: 'https://placehold.co/600x800/3b82f6/FFF?text=Awards', alt: "Awards" },
    { src: 'https://placehold.co/600x800/8b5cf6/FFF?text=Innovation', alt: "Innovation" },
    { src: 'https://placehold.co/600x800/f472b6/FFF?text=Fun+Times', alt: "Fun Times" },
    { src: 'https://placehold.co/600x800/fbbf24/FFF?text=Pitching', alt: "Pitching" },
];

const Gallery = () => {
    const [columns, setColumns] = useState([[], [], []]);
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        const distributedColumns = [[], [], []];
        allGalleryImages.forEach((image, index) => {
            distributedColumns[index % 3].push(image);
        });
        setColumns(distributedColumns);
    }, []);

    return (
        <section id="gallery" className="py-32">
            <div className="container mx-auto px-[5%] max-w-7xl">
                 <h2
                    ref={titleRef}
                    className={`
                        text-4xl md:text-6xl font-extrabold text-center mb-4
                        bg-gradient-to-r from-light to-primary bg-clip-text text-transparent
                        transition-all duration-700
                        ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Glimpses of Our Journey
                </h2>
                <p
                    ref={subtitleRef}
                    className={`
                        text-center text-lg text-slate-400 mb-16
                        transition-all duration-700 delay-200
                        ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    A continuous showcase of our defining moments.
                </p>
            </div>

            <div 
                className="
                    group flex gap-8 w-full max-w-7xl mx-auto px-[5%] h-[80vh] overflow-hidden
                    [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                "
            >
                {columns.map((columnImages, colIndex) => (
                    <div 
                        key={colIndex} 
                        className={`
                            flex flex-col gap-8 flex-1
                            animate-[verticalScroll_linear_infinite] group-hover:[animation-play-state:paused]
                            ${colIndex === 1 ? '[animation-direction:reverse] [animation-duration:70s]' : '[animation-duration:50s]'}
                            ${colIndex === 2 && '[animation-duration:45s]'}
                        `}
                    >
                        {/* Render images twice for the seamless loop */}
                        {[...columnImages, ...columnImages].map((image, imgIndex) => (
                            <div key={`${colIndex}-${imgIndex}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;