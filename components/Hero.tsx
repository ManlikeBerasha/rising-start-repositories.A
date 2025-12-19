
import React, { useEffect, useState } from 'react';

interface HeroProps {
    onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative h-[80vh] md:h-[70vh] lg:h-screen text-white flex flex-col justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
                }}
            >
                <img
                    src="https://picsum.photos/1920/1080?grayscale&blur=2"
                    alt="Financial background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/70 backdrop-brightness-50"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 z-5">
                <div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-brand-gold/20 rotate-45 float-animation"
                    style={{
                        transform: `rotate(45deg) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                    }}
                ></div>
                <div
                    className="absolute top-3/4 right-1/4 w-24 h-24 border border-brand-gold/30 rotate-12"
                    style={{
                        transform: `rotate(12deg) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
                    }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/3 w-16 h-16 bg-brand-gold/10 rounded-full pulse-glow"
                    style={{
                        transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
                    }}
                ></div>
            </div>

            {/* Logo with 3D effect */}
            <div className="absolute top-0 left-0 w-full p-4 md:p-8 z-20">
                <div className="glass-effect bg-brand-gold/90 inline-block px-6 py-3 rounded-lg depth-shadow">
                    <h1 className="text-brand-blue text-sm md:text-base font-bold tracking-widest">
                        RAISERS OF STARS CONSULTING
                    </h1>
                </div>
            </div>

            {/* Main content with 3D transforms */}
            <div
                className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-32 max-w-4xl"
                style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
                }}
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter slide-in-3d">
                    Achieve <br/>
                    <span className="text-brand-gold">Your Financial</span> <br/>
                    Goals
                </h2>
                <div className="mt-6 space-y-4">
                    <p className="max-w-lg text-lg md:text-xl text-gray-200 slide-in-3d" style={{ animationDelay: '200ms' }}>
                        Are you ready to make wise investment decisions and manage your wealth effectively?
                    </p>
                    <p className="max-w-lg text-lg md:text-xl text-gray-200 slide-in-3d" style={{ animationDelay: '400ms' }}>
                        Let us guide you every step of the way!
                    </p>
                </div>
                <button
                    onClick={onJoinClick}
                    className="mt-8 px-10 py-4 card-3d glass-effect border-2 border-brand-gold text-brand-gold font-bold text-lg uppercase tracking-wider hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-blue slide-in-3d"
                    style={{ animationDelay: '600ms' }}
                >
                    <span className="relative z-10">Join Us</span>
                </button>
            </div>
        </div>
    );
};
