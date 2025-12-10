'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ContactPopup from './contactpopup';

const ArrowRightIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

const DottedGlobe = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
            <Image 
                src="/Breathe.png" 
                alt="Breathe" 
                width={450} 
                height={450}
                className="object-contain animate-float w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
            />
            {/* Ellipse shadow below globe with gap */}
            <svg width="100%" height="34" viewBox="0 0 474 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4 sm:mt-6 max-w-[300px] sm:max-w-[400px] lg:max-w-[474px]">
                <ellipse cx="237" cy="17" rx="237" ry="17" fill="#666468" fillOpacity="0.2"/>
            </svg>
        </div>
    );
};

export default function GlobalPartner() {
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    
    const benefits = [
        "CTO-level clarity",
        "Senior engineering execution",
        "AI automation",
        "Fast delivery",
        "Full-stack product ownership"
    ];

    return (
        <section className="bg-[#F4F2EF] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-0 relative overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-4 sm:gap-12 lg:gap-8">
                {/* Title - Full Width */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-semibold text-[#0D0C0C] leading-[1.2] w-full">
                    &ldquo;A Global Partner — Without the $500k/Year CTO Cost.&rdquo;
                </h2>

                {/* Content and Globe */}
                <div className="flex flex-col lg:flex-row items-start gap-12 sm:gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 w-full">
                        <div className="inline-block bg-[#F4F2EF] border border-black/80 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 lg:mb-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[#757575] font-light text-xs sm:text-sm md:text-base">
                                Founders bring us in because we offer:
                            </span>
                        </div>

                        {/* Globe - Only visible on mobile/tablet, appears after the badge */}
                        <div className="lg:hidden w-full flex justify-center -translate-y-4 sm:-translate-y-6 mb-6 sm:mb-8">
                            <DottedGlobe />
                        </div>

                        <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-10 lg:mb-12">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#590178] flex items-center justify-center shrink-0 border-[1.12px] border-solid border-[#CECECE] shadow-[2.99px_2.99px_0px_0px_#AE9393] group-hover:scale-105 transition-transform">
                                        <ArrowRightIcon />
                                    </div>
                                    <span className="text-base sm:text-lg text-[#0D0C0C] font-medium font-urbanist">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={() => setIsContactPopupOpen(true)}
                            className="bg-[#5D0076] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-[#4a005e] transition-all flex items-center gap-2 shadow-[3px_4px_4px_0px_#73656540] hover:-translate-y-0.5 font-manrope w-full sm:w-auto justify-center sm:justify-start"
                        >
                            Check Fit & Timeline
                        </button>
                    </div>

                    {/* Right Globe - Only visible on desktop */}
                    <div className="hidden lg:flex flex-1 w-full justify-end -translate-y-12">
                        <DottedGlobe />
                    </div>
                </div>
            </div>

            {/* Contact Popup */}
            <ContactPopup 
                isOpen={isContactPopupOpen} 
                onClose={() => setIsContactPopupOpen(false)} 
            />
        </section>
    );
}
