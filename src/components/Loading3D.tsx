import React from 'react';

export const Loading3D: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-brand-blue flex items-center justify-center z-50">
            <div className="relative">
                {/* Animated logo */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-brand-gold tracking-widest mb-4">
                        RAISERS OF STARS
                    </h1>
                    <div className="w-32 h-1 bg-brand-gold mx-auto"></div>
                </div>
                
                {/* 3D Loading animation */}
                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-brand-gold rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-transparent border-r-brand-gold rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-4 border-4 border-transparent border-b-brand-gold rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
                </div>
                
                <p className="text-center text-gray-300 mt-6 text-lg">
                    Loading your financial future...
                </p>
            </div>
        </div>
    );
};
