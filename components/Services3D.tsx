import React, { useEffect, useRef, useState } from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface Service {
    title: string;
    description: string;
    icon: string;
    delay: number;
}

const services: Service[] = [
    {
        title: "Financial Goal Setting",
        description: "Strategic planning to define and achieve your financial objectives with clear milestones.",
        icon: "🎯",
        delay: 0
    },
    {
        title: "Wealth Management",
        description: "Comprehensive portfolio management and asset allocation strategies for long-term growth.",
        icon: "💰",
        delay: 200
    },
    {
        title: "Smart Investment",
        description: "Data-driven investment strategies tailored to your risk tolerance and goals.",
        icon: "📈",
        delay: 400
    },
    {
        title: "Financial Planning",
        description: "Personalized financial roadmaps covering retirement, education, and major life events.",
        icon: "📊",
        delay: 600
    },
    {
        title: "Budgeting & Savings",
        description: "Practical budgeting solutions and savings strategies to optimize your cash flow.",
        icon: "💳",
        delay: 800
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), service.delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [service.delay]);

    return (
        <div
            ref={cardRef}
            className={`card-3d glass-effect rounded-xl p-6 transition-all duration-700 ${
                isVisible ? 'slide-in-3d' : 'opacity-0 translate-x-[-100px]'
            } ${index % 2 === 0 ? 'float-animation' : ''}`}
            style={{ animationDelay: `${service.delay}ms` }}
        >
            <div className="text-4xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-brand-gold mb-3 text-center">
                {service.title}
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
                {service.description}
            </p>
            <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
        </div>
    );
};

export const Services3D: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div 
            ref={containerRef}
            className="bg-brand-blue py-24 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #F2B705 0%, transparent 50%)`
                }}
            ></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                        Our <span className="text-brand-gold">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional financial solutions designed to elevate your wealth and secure your future
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="card-3d glass-effect rounded-xl p-8 deep-shadow">
                        <h3 className="text-3xl font-bold text-brand-gold mb-6">
                            Why Choose Us?
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Expert financial guidance from certified professionals",
                                "Solutions tailored specifically to your unique needs",
                                "Proven investment strategies with track record",
                                "Continuous support throughout your financial journey"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 pulse-glow"></div>
                                    <p className="text-gray-200 text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card-3d glass-effect rounded-xl p-8 deep-shadow">
                        <h3 className="text-3xl font-bold text-brand-gold mb-6">
                            Get Started Today
                        </h3>
                        <p className="text-gray-200 text-lg mb-8">
                            Ready to transform your financial future? Contact us for a personalized consultation.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center group-hover:bg-brand-gold/30 transition-colors">
                                    <MailIcon className="w-6 h-6 text-brand-gold" />
                                </div>
                                <a 
                                    href="mailto:patriciaj.mahinda@yahoo.com" 
                                    className="text-lg text-gray-200 hover:text-brand-gold transition-colors"
                                >
                                    patriciaj.mahinda@yahoo.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center group-hover:bg-brand-gold/30 transition-colors">
                                    <PhoneIcon className="w-6 h-6 text-brand-gold" />
                                </div>
                                <a 
                                    href="tel:0721609263" 
                                    className="text-lg text-gray-200 hover:text-brand-gold transition-colors"
                                >
                                    0721609263
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
