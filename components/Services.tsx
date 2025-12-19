
import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="mb-3 text-gray-200 text-lg">{children}</li>
);

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="mb-3 text-gray-200 text-lg">{children}</li>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mb-6">
        <h3 className="text-2xl font-bold uppercase tracking-wider text-brand-gold">{children}</h3>
        <div className="w-16 h-1 bg-brand-gold mt-2"></div>
    </div>
);


export const Services: React.FC = () => {
    return (
        <div className="bg-brand-blue py-24 px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <SectionTitle>Product</SectionTitle>
                    <p className="mb-6 text-gray-300 text-lg">Our services include:</p>
                    <ul>
                        <ServiceItem>Financial Goal Setting</ServiceItem>
                        <ServiceItem>Wealth Management</ServiceItem>
                        <ServiceItem>Smart Investment</ServiceItem>
                        <ServiceItem>Personalized Financial Planning</ServiceItem>
                        <ServiceItem>Budgeting & Savings Plans</ServiceItem>
                    </ul>
                </div>
                <div>
                    <SectionTitle>Why Choose Us?</SectionTitle>
                     <ul>
                        <BenefitItem>Get expert financial guidance</BenefitItem>
                        <BenefitItem>Solutions tailored to your needs</BenefitItem>
                        <BenefitItem>Proven investment strategies</BenefitItem>
                        <BenefitItem>Support every step of the way</BenefitItem>
                    </ul>
                    <div className="mt-12 space-y-4">
                        <div className="flex items-center space-x-4 text-gray-200">
                            <MailIcon className="w-6 h-6 text-brand-gold" />
                            <a href="mailto:patriciaj.mahinda@yahoo.com" className="text-lg hover:text-brand-gold transition-colors">patriciaj.mahinda@yahoo.com</a>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-200">
                            <PhoneIcon className="w-6 h-6 text-brand-gold" />
                            <a href="tel:0721609263" className="text-lg hover:text-brand-gold transition-colors">0721609263</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
