import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

// Your gallery images - replace with actual event photos
const allGalleryImages = [
    { src: 'https://placehold.co/400x300/6366f1/FFF?text=Event+1', alt: "E-Summit Event" },
    { src: 'https://placehold.co/400x300/ec4899/FFF?text=Workshop+2', alt: "Workshop" },
    { src: 'https://placehold.co/400x300/f59e0b/FFF?text=Network+3', alt: "Networking Event" },
    { src: 'https://placehold.co/400x300/10b981/FFF?text=Team+4', alt: "Team Activity" },
    { src: 'https://placehold.co/400x300/ef4444/FFF?text=Speaker+5', alt: "Guest Speaker" },
    { src: 'https://placehold.co/400x300/3b82f6/FFF?text=Awards+6', alt: "Awards Ceremony" },
    { src: 'https://placehold.co/400x300/8b5cf6/FFF?text=Innovate+7', alt: "Innovation" },
    { src: 'https://placehold.co/400x300/f472b6/FFF?text=Pitch+8', alt: "Pitching Session" },
    { src: 'https://placehold.co/400x300/fbbf24/FFF?text=Startup+9', alt: "Startup Showcase" },
    { src: 'https://placehold.co/400x300/06b6d4/FFF?text=Summit+10', alt: "E-Summit Highlight" },
    { src: 'https://placehold.co/400x300/a855f7/FFF?text=Tech+11', alt: "Tech Session" },
    { src: 'https://placehold.co/400x300/f97316/FFF?text=Launch+12', alt: "Product Launch" },
];

const Gallery = () => {
    const [columns, setColumns] = useState([[], [], []]);
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    
    const columnRefs = useRef([]);
    const scrollPositions = useRef([0, 0, 0]); // Track position for each column
    const animationFrameId = useRef(null);
    const isPaused = useRef(false);

    // Distribute images into three columns
    useEffect(() => {
        const distributedColumns = [[], [], []];
        allGalleryImages.forEach((image, index) => {
            distributedColumns[index % 3].push(image);
        });
        setColumns(distributedColumns);
    }, []);

    // Infinite scroll animation with translate3d and proper bidirectional loop reset
    useEffect(() => {
        if (columns[0].length === 0) return;

        const speeds = [0.5, 0.4, 0.6]; // Speed in pixels per frame
        const directions = [1, -1, 1]; // 1 = scroll down, -1 = scroll up

        const animate = () => {
            if (!isPaused.current) {
                columnRefs.current.forEach((column, index) => {
                    if (!column) return;

                    // Get the height of the column content (half is original, half is duplicate)
                    const columnHeight = column.scrollHeight / 2;

                    // Update scroll position
                    scrollPositions.current[index] += speeds[index] * directions[index];

                    // Seamless loop reset logic for BOTH directions
                    if (directions[index] === 1) {
                        // Scrolling DOWN (positive direction)
                        // When position reaches the end (columnHeight), reset to 0
                        if (scrollPositions.current[index] >= columnHeight) {
                            scrollPositions.current[index] = 0;
                        }
                    } else {
                        // Scrolling UP (negative direction) 
                        // When position goes past the start (becomes too negative), reset
                        if (scrollPositions.current[index] <= 0) {
                            scrollPositions.current[index] = columnHeight;
                        }
                    }

                    // Apply transform using translate3d
                    const translateY = -scrollPositions.current[index];
                    column.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
                });
            }

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [columns]);

    const handleMouseEnter = () => {
        isPaused.current = true;
    };

    const handleMouseLeave = () => {
        isPaused.current = false;
    };

    return (
        <section id="gallery">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>
                    Glimpses of Our Journey
                </h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>
                    A continuous showcase of our defining moments.
                </p>
            </div>

            <div 
                className="autoscroll-gallery-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {columns.map((columnImages, colIndex) => (
                    <div 
                        key={colIndex} 
                        className="autoscroll-column"
                        ref={(el) => (columnRefs.current[colIndex] = el)}
                    >
                        {/* First set of images */}
                        {columnImages.map((image, imgIndex) => (
                            <div key={`original-${colIndex}-${imgIndex}`} className="autoscroll-item">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </div>
                        ))}
                        {/* Duplicate set for seamless infinite loop */}
                        {columnImages.map((image, imgIndex) => (
                            <div key={`duplicate-${colIndex}-${imgIndex}`} className="autoscroll-item">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
