// src/hooks/useMouseTrail.js
import { useState, useEffect } from 'react';

const useMouseTrail = (containerRef) => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            // Get position relative to the container
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create a new star particle
            const newStar = {
                id: Date.now() + Math.random(),
                x,
                y,
                size: Math.random() * 8 + 4, // Random size between 4px and 12px
                rotation: Math.random() * 360,
            };

            // Add new star and remove old ones to keep the trail length limited
            setTrail((prevTrail) => [...prevTrail, newStar].slice(-20)); // Keep max 20 stars
        };

        container.addEventListener('mousemove', handleMouseMove);

        // Cleanup: remove stars when mouse leaves
        const handleMouseLeave = () => {
             // A timeout gives the last stars a moment to fade out via CSS
            setTimeout(() => setTrail([]), 500);
        };
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [containerRef]);

    return trail.map((star) => (
        <i
            key={star.id}
            className="bx bxs-star star-particle"
            style={{
                top: `${star.y}px`,
                left: `${star.x}px`,
                fontSize: `${star.size}px`,
                transform: `translate(-50%, -50%) rotate(${star.rotation}deg)`,
            }}
        />
    ));
};

export default useMouseTrail;