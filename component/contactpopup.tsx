'use client';

import React, { useState } from 'react';

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // TODO: Add your form submission logic here
        console.log('Form submitted:', formData);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            onClose();
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Modal */}
            <div 
                className="relative bg-[#F4F2EF] rounded-xl border-2 border-black max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#590178] hover:bg-[#4a005e] text-white rounded-full transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] z-10"
                    aria-label="Close"
                >
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                        <div className="inline-block bg-[#E5D9BF] border border-black/80 rounded-full px-4 py-1.5 mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[#590178] font-medium text-xs tracking-wide uppercase font-manrope">
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-2xl font-playfair font-bold text-[#0D0C0C] leading-tight">
                            Contact Us
                        </h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Name Field */}
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-xs font-bold text-[#0D0C0C] mb-1 font-urbanist"
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#590178] focus:border-[#590178] font-urbanist text-sm text-[#0D0C0C] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-xs font-bold text-[#0D0C0C] mb-1 font-urbanist"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#590178] focus:border-[#590178] font-urbanist text-sm text-[#0D0C0C] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label 
                                htmlFor="phone" 
                                className="block text-xs font-bold text-[#0D0C0C] mb-1 font-urbanist"
                            >
                                Phone *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#590178] focus:border-[#590178] font-urbanist text-sm text-[#0D0C0C] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-xs font-bold text-[#0D0C0C] mb-1 font-urbanist"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#590178] focus:border-[#590178] font-urbanist text-sm text-[#0D0C0C] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#590178] hover:bg-[#4a005e] disabled:bg-[#590178]/50 text-white px-6 py-3 rounded-lg font-bold text-base transition-all shadow-[4px_4px_0px_0px_#0D0C0C] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0D0C0C] font-manrope disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#0D0C0C]"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
