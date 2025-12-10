'use client';

import { useState } from 'react';
import ContactPopup from './contactpopup';

const CTA = () => {
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    
    return (
        <section className="bg-[#E5D9BF] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
                {/* Headline */}
                <h2 className="[font-family:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A1B3D] leading-tight px-2">
                    &ldquo;Ready for Your Fastest Product Growth Cycle Yet?&rdquo;
                </h2>

                {/* Paragraph */}
                <p className="[font-family:var(--font-urbanist)] text-base sm:text-lg md:text-xl text-[#2A1B3D] font-normal max-w-3xl px-2">
                    If you want speed, reliability, ownership, and a partner that behaves like an internal team, Scalixity is the right fit.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4 w-full sm:w-auto px-2">
                    <button 
                        onClick={() => setIsContactPopupOpen(true)}
                        className="bg-[#590178] hover:bg-[#6b0290] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all shadow-[3px_4px_4px_0px_#73656540] w-full sm:w-auto"
                    >
                        Start Your Growth Sprint
                    </button>

                    <button 
                        onClick={() => setIsContactPopupOpen(true)}
                        className="bg-[#590178] hover:bg-[#6b0290] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all shadow-[3px_4px_4px_0px_#73656540] w-full sm:w-auto"
                    >
                        Book a 15-Min Strategy Call
                    </button>
                </div>
            </div>

            {/* Contact Popup */}
            <ContactPopup 
                isOpen={isContactPopupOpen} 
                onClose={() => setIsContactPopupOpen(false)} 
            />
        </section>
    );
};

export default CTA;

