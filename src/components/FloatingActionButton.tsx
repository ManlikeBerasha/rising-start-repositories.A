import React, { useState, useEffect } from 'react';

interface FloatingActionButtonProps {
    onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
            <button
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`card-3d glass-effect bg-brand-gold/90 hover:bg-brand-gold text-brand-blue w-16 h-16 rounded-full deep-shadow transition-all duration-300 flex items-center justify-center group ${
                    isHovered ? 'scale-110' : 'scale-100'
                }`}
            >
                <svg 
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                    />
                </svg>
            </button>
            
            {/* Tooltip */}
            <div className={`absolute bottom-20 right-0 bg-white text-brand-blue px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
                <span className="text-sm font-medium">Get Consultation</span>
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
        </div>
    );
};
