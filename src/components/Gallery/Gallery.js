import React, { useState, useEffect, useRef, useCallback } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useMouseTrail from '../../hooks/useMouseTrail';

// --- Master list of all gallery images ---
const allGalleryImages = [
    { id: 1, src: 'https://placehold.co/800x600/6366f1/FFF?text=E-Summit', alt: "E-Summit Highlight" },
    { id: 2, src: 'https://placehold.co/800x600/ec4899/FFF?text=Workshop', alt: "Workshop Session" },
    { id: 3, src: 'https://placehold.co/800x600/f59e0b/FFF?text=Networking', alt: "Networking Event" },
    { id: 4, src: 'https://placehold.co/800x600/10b981/FFF?text=Team+Work', alt: "Team Collaboration" },
    { id: 5, src: 'https://placehold.co/800x600/ef4444/FFF?text=Speaker', alt: "Guest Speaker" },
    { id: 6, src: 'https://placehold.co/800x600/3b82f6/FFF?text=Awards', alt: "Award Ceremony" },
    { id: 7, src: 'https://placehold.co/800x600/8b5cf6/FFF?text=Innovation', alt: "Innovation Fair" },
    { id: 8, src: 'https://placehold.co/800x600/f472b6/FFF?text=Fun+Times', alt: "Fun Times" },
    { id: 9, src: 'https://placehold.co/800x600/fbbf24/FFF?text=Pitching', alt: "Pitching Session" },
];

const MAX_VISIBLE_IMAGES = 6;

// Helper to generate random styles for each image
// MODIFIED: Expanded the range to ensure images spread out more
const getRandomStyles = () => ({
    top: `${Math.random() * 80 + 10}%`, // 10% to 90%
    left: `${Math.random() * 80 + 10}%`, // 10% to 90%
    width: `${Math.random() * 15 + 20}%`, // 20% to 35%
    transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`, // Center the element then rotate
    zIndex: Math.floor(Math.random() * MAX_VISIBLE_IMAGES),
});

const Gallery = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const [focusedImageId, setFocusedImageId] = useState(null); // NEW: Track the focused image
    const intervalRef = useRef(null);
    const galleryContainerRef = useRef(null);
    const starTrail = useMouseTrail(galleryContainerRef);

    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    // Function to start the animation loop
    const startChaos = useCallback(() => {
        // Clear any existing interval before starting a new one
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        intervalRef.current = setInterval(() => {
            setVisibleImages((currentImages) => {
                const imagesWithOneRemoved = [...currentImages];
                imagesWithOneRemoved.splice(Math.floor(Math.random() * currentImages.length), 1);

                const visibleIds = currentImages.map(img => img.id);
                const availableImages = allGalleryImages.filter(img => !visibleIds.includes(img.id));
                const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
                
                return [...imagesWithOneRemoved, { ...newImage, styles: getRandomStyles() }];
            });
        }, 2000);
    }, []);

    useEffect(() => {
        const initialImages = allGalleryImages
            .slice(0, MAX_VISIBLE_IMAGES)
            .map((img) => ({ ...img, styles: getRandomStyles() }));
        setVisibleImages(initialImages);

        startChaos(); // Start the animation on mount

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [startChaos]);


    // NEW: Handlers for focusing an image
    const handleMouseEnter = (id) => {
        clearInterval(intervalRef.current); // Pause the chaos
        setFocusedImageId(id);
    };

    const handleMouseLeave = () => {
        setFocusedImageId(null); // Unfocus
        startChaos(); // Resume the chaos
    };

    return (
        <section id="gallery">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>Moments & Memories</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>A Glimpse Into The Chaos of Innovation</p>

                <div 
                    className={`chaotic-gallery-container ${focusedImageId ? 'gallery-focused' : ''}`}
                    ref={galleryContainerRef}
                >
                    {starTrail} 
                    {visibleImages.map((image) => (
                        <div 
                            key={image.id} 
                            className={`chaotic-gallery-image ${focusedImageId === image.id ? 'is-focused' : ''}`} 
                            style={image.styles}
                            onMouseEnter={() => handleMouseEnter(image.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;