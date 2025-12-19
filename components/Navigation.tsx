import React, { useState, useEffect } from 'react';

interface NavigationProps {
    onContactClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-brand-blue/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className="text-brand-gold font-bold text-lg tracking-wider hover:opacity-80 transition-opacity"
                        >
                            RAISERS OF STARS
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-white hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Services
                            </button>
                            <button
                                onClick={onContactClick}
                                className="bg-brand-gold text-brand-blue px-4 py-2 text-sm font-bold rounded hover:opacity-90 transition-opacity"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-brand-gold focus:outline-none focus:text-brand-gold"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-blue/95 backdrop-blur-sm">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-white hover:text-brand-gold block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-white hover:text-brand-gold block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => {
                                onContactClick();
                                setIsMenuOpen(false);
                            }}
                            className="bg-brand-gold text-brand-blue block px-3 py-2 text-base font-bold w-full text-left rounded hover:opacity-90 transition-opacity"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
