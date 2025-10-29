// src/components/Events/Events.jsx

import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';

// --- Sub-component for individual event cards ---
const EventCard = ({ image, title, children, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`
                group bg-gradient-to-br from-slate-800/90 to-slate-900/90
                rounded-2xl overflow-hidden border border-primary/20
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:-translate-y-4 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/50 hover:border-secondary
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
            `}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            {/* Image container */}
            <div className="h-56 w-full overflow-hidden relative">
                <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-light transition-colors duration-300 group-hover:text-primary">
                    {title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                    {children}
                </p>
                <a href="#events" className="
                    inline-flex items-center gap-2 text-primary font-semibold
                    transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1
                ">
                    View More Details
                    <i className='bx bx-right-arrow-alt transition-transform duration-300 group-hover:translate-x-1'></i>
                </a>
            </div>
        </div>
    );
};


const Events = () => {
    const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="events" className="py-32 bg-slate-900/30">
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
                    Flagship Events
                </h2>
                <p
                    ref={subtitleRef}
                    className={`
                        text-center text-lg text-slate-400 mb-16
                        transition-all duration-700 delay-200
                        ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    Transforming Ideas Into Reality
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <EventCard 
                        image="https://placehold.co/600x400/6366f1/020617?text=E-Summit"
                        title="E-Summit '25"
                        delay={100}
                    >
                        Our premier annual event celebrating innovation. A confluence of aspiring entrepreneurs, industry leaders, and mentors for keynotes, workshops, and networking.
                    </EventCard>
                    <EventCard 
                        image="https://placehold.co/600x400/ec4899/020617?text=Earn+&+Sell"
                        title="Earn & Sell"
                        delay={200}
                    >
                        A dynamic platform for student entrepreneurs to showcase and sell their products, gaining real-world market experience and practical business insights.
                    </EventCard>
                    <EventCard 
                        image="https://placehold.co/600x400/f59e0b/020617?text=EAD"
                        title="Entrepreneurship Awareness Drive"
                        delay={300}
                    >
                        An inspiring series of talks and workshops featuring successful founders and industry experts, designed to ignite the entrepreneurial spark in students.
                    </EventCard>
                </div>
            </div>
        </section>
    );
};

export default Events;