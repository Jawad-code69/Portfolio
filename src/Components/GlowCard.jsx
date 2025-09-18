import React, { useRef } from 'react'

const Glowcard = ({ card, children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const cardEl = cardRef.current;
        if (!cardEl) return;

        // Get the mouse position relative to the card
        const rect = cardEl.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculate the angle
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        cardEl.style.setProperty('--start', angle + 60);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className='card card-border timeline-card rounded-xl p-10'
        >
            <div className='glow' />
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5 }, (_, i) => (
                    <img src="/images/star.png" key={i} alt="star" className='size-5' />
                ))}
            </div>
            <div className='mb-5'>
                <p className='text-white-50 text-lg'>
                    {card.review}
                </p>
            </div>
            {children}
        </div>
    );
};

export default Glowcard;
