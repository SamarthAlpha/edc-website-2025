// src/components/Team/Team.jsx

import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

// --- Team Member Sub-component ---
const TeamMember = ({ image, name, role, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`
                group text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:-translate-y-4
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            {/* Avatar */}
            <div className="relative w-44 h-44 mx-auto mb-6">
                {/* Spinning border pseudo-element */}
                <div className="
                    absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    animate-rotate-border
                " />
                
                {/* Avatar Image container */}
                <div
                    className="
                        relative w-full h-full rounded-full bg-cover bg-center 
                        border-4 border-primary/30 group-hover:border-transparent
                        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                        group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50
                    "
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>

            {/* Info */}
            <div>
                <h3 className="text-xl font-bold mb-1 text-light">{name}</h3>
                <p className="text-primary font-semibold">{role}</p>
            </div>
        </div>
    );
};


const Team = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    const teamMembers = [
        { image: 'https://placehold.co/200x200/FFFFFF/020617?text=CEO', name: 'Team Lead', role: 'President' },
        { image: 'https://placehold.co/200x200/FFFFFF/020617?text=VP', name: 'Vice President', role: 'Operations Head' },
        { image: 'https://placehold.co/200x200/FFFFFF/020617?text=Events', name: 'Events Manager', role: 'Event Coordination' },
        { image: 'https://placehold.co/200x200/FFFFFF/020617?text=Tech', name: 'Tech Lead', role: 'Technology & Innovation' },
    ];

    return (
        <section id="team" className="py-32">
            <div className="container mx-auto px-[5%] max-w-6xl">
                 <h2
                    ref={titleRef}
                    className={`
                        text-4xl md:text-6xl font-extrabold text-center mb-4
                        bg-gradient-to-r from-light to-primary bg-clip-text text-transparent
                        transition-all duration-700
                        ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Our Leadership
                </h2>
                <p
                    ref={subtitleRef}
                    className={`
                        text-center text-lg text-slate-400 mb-16
                        transition-all duration-700 delay-200
                        ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Meet The Visionaries
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;