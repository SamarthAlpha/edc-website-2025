// src/components/Team/Team.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TeamMember = ({ image, name, role, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} className={`team-member ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
            <div className="member-avatar" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="member-info">
                <h3>{name}</h3>
                <p className="member-role">{role}</p>
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
        <section id="team">
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>Our Leadership</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>Meet The Visionaries</p>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;