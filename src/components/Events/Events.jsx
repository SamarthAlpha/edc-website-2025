// src/components/Events/Events.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const EventCard = ({ image, title, children, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} className={`event-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
            <div className="event-image" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="event-content">
                <h3>{title}</h3>
                <p>{children}</p>
                <a href="#events" className="event-details-link">View More Details <i className='bx bx-right-arrow-alt'></i></a>
            </div>
        </div>
    );
};

const Events = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="events" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="container">
                <h2 ref={titleRef} className={`section-title ${isTitleVisible ? 'visible' : ''}`}>Flagship Events</h2>
                <p ref={subtitleRef} className={`section-subtitle ${isSubtitleVisible ? 'visible' : ''}`}>Transforming Ideas Into Reality</p>
                <div className="events-grid">
                    <EventCard image="https://placehold.co/600x400/6366f1/020617?text=E-Summit" title="E-Summit '25" delay={0.1}>
                        Our premier annual event celebrating innovation. A confluence of aspiring entrepreneurs, industry leaders, and mentors for keynotes, workshops, and networking.
                    </EventCard>
                    <EventCard image="https://placehold.co/600x400/ec4899/020617?text=Earn+&+Sell" title="Earn & Sell" delay={0.2}>
                        A dynamic platform for student entrepreneurs to showcase and sell their products, gaining real-world market experience and practical business insights.
                    </EventCard>
                    <EventCard image="https://placehold.co/600x400/f59e0b/020617?text=EAD" title="Entrepreneurship Awareness Drive" delay={0.3}>
                        An inspiring series of talks and workshops featuring successful founders and industry experts, designed to ignite the entrepreneurial spark in students.
                    </EventCard>
                </div>
            </div>
        </section>
    );
};

export default Events;