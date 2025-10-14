// src/components/Gallery/Gallery.js
import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// --- Gallery Data ---
// In a real app, you might fetch this from an API
const galleryImages = [
    { id: 1, src: 'https://placehold.co/800x600/6366f1/FFF?text=E-Summit+Highlight', alt: "E-Summit Highlight" },
    { id: 2, src: 'https://placehold.co/800x600/ec4899/FFF?text=Workshop+Session', alt: "Workshop Session" },
    { id: 3, src: 'https://placehold.co/800x600/f59e0b/FFF?text=Networking+Event', alt: "Networking Event" },
    { id: 4, src: 'https://placehold.co/800x600/10b981/FFF?text=Team+Collaboration', alt: "Team Collaboration" },
    { id: 5, src: 'https://placehold.co/800x600/ef4444/FFF?text=Guest+Speaker', alt: "Guest Speaker" },
    { id: 6, src: 'https://placehold.co/800x600/3b82f6/FFF?text=Award+Ceremony', alt: "Award Ceremony" },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    const handlePrev = () => {
        setActiveIndex((prevIndex) => 
            (prevIndex - 1 + galleryImages.length) % galleryImages.length
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    return (
        <section id="gallery">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>Moments & Memories</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>A Glimpse Into Our World</p>

                <div className="gallery-container">
                    <div className="card-stack">
                        {galleryImages.map((image, index) => {
                            const status = index === activeIndex 
                                ? 'active' 
                                : (index === (activeIndex - 1 + galleryImages.length) % galleryImages.length ? 'prev' : 'inactive');

                            // We render the 'next' card behind the active one for a smooth visual transition
                            const isNext = index === (activeIndex + 1) % galleryImages.length;
                            
                            return (
                                <div 
                                    key={image.id} 
                                    className={`gallery-card ${status} ${isNext ? 'next' : ''}`}
                                    // The z-index logic ensures the active card is always on top,
                                    // followed by the 'next' card, and then the rest of the stack.
                                    style={{ zIndex: index === activeIndex ? galleryImages.length : isNext ? galleryImages.length -1 : galleryImages.length - index }}
                                >
                                    <img src={image.src} alt={image.alt} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="gallery-nav">
                        <button onClick={handlePrev} aria-label="Previous image"><i className='bx bx-chevron-left'></i></button>
                        <button onClick={handleNext} aria-label="Next image"><i className='bx bx-chevron-right'></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;