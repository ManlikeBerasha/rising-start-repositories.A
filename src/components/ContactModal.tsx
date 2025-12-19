
import React, { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitError, setSubmitError] = useState<string>('');

    useEffect(() => {
        if (!isOpen) {
            // Reset form on close
            setTimeout(() => {
                setName('');
                setEmail('');
                setMessage('');
                setIsSubmitted(false);
                setIsSubmitting(false);
                setErrors({});
                setSubmitError('');
            }, 300); // Wait for transition
        }
    }, [isOpen]);

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
        } else if (message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setSubmitError('');

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call - replace with actual backend integration
            await new Promise(resolve => setTimeout(resolve, 2000));

            // For now, we'll use mailto as a fallback
            const subject = encodeURIComponent('Consultation Request from ' + name);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:patriciaj.mahinda@yahoo.com?subject=${subject}&body=${body}`;

            // Open email client
            window.open(mailtoLink, '_blank');

            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
            }, 3000);
        } catch (error) {
            setSubmitError('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="card-3d glass-effect bg-white/95 backdrop-blur-lg rounded-xl deep-shadow p-8 max-w-lg w-full text-gray-800 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale border border-white/20"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'fade-in-scale 0.3s forwards' }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-brand-blue">Get in Touch</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700">&times;</button>
                </div>
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
                        <p className="text-gray-600">Your email client should open shortly. We will get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <p className="mb-6 text-gray-600">Fill out the form below and we'll reach out to discuss your financial future.</p>
                        {submitError && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                {submitError}
                            </div>
                        )}
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue ${
                                        errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-6 w-full font-bold py-3 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
                                isSubmitting
                                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                    : 'bg-brand-gold text-brand-blue hover:opacity-90'
                            }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Request Consultation'}
                        </button>
                    </form>
                )}
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
            `}</style>
        </div>
    );
};
