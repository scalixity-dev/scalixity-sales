'use client';

import { useState } from 'react';
import ContactPopup from './contactpopup';

const Hero = () => {
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    const stats = [
        {
            label: "UK Registered Company",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.00019V18.0002M12 6.00019C12 6.00019 16 4.00019 20 6.00019V18.0002C16 16.0002 12 18.0002 12 18.0002M12 6.00019C12 6.00019 8 4.00019 4 6.00019V18.0002C8 16.0002 12 18.0002 12 18.0002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            label: "India Development Office",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21M5 21V7H19V21M9 10H11M9 14H11M9 18H11M13 10H15M13 14H15M13 18H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            label: "Served Clients In US/UK/UAE",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        { label: "Delivery Success Rate", value: "97%" },
        { label: "Avg Timeline Compression", value: "58%" },
    ];

    return (
        <section className="bg-[#E5D9BF] min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col w-full max-w-8xl">
                <div className="w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-xl overflow-hidden relative">
                    {/* Video background */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/5409425_Coll_wavebreak_Mesh_1280x720.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B3D]/80 to-[#44315F]/80 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]" />

                    {/* Background glow effects (optional but adds depth) */}
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                    <div className="relative z-10 max-w-4xl">
                        <h1 className="[font-family:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#EAE5D5] leading-[1.1] mb-6 sm:mb-8 md:mb-12 tracking-tight">
                            &ldquo;Your Growth Engine, Not Just Your Tech Team.&rdquo;
                        </h1>

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl">
                            <p className="[font-family:var(--font-urbanist)] text-[#D8D8D8] text-base sm:text-lg md:text-xl font-medium tracking-wide">
                                UK-Registered Full-Stack Growth Engineering Partner for Founders Who Want Speed, Scale & Zero Bullshit.
                            </p>

                            <p className="[font-family:var(--font-urbanist)] text-[#D8D8D8] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                We design, build, and scale AI-powered products with consulting-level clarity and engineering-level precision — delivering 3 months of progress in 4 weeks.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                                <button 
                                    onClick={() => setIsContactPopupOpen(true)}
                                    className="bg-[#590178] hover:bg-[#6b0290] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all transform hover:scale-105 shadow-lg border border-transparent"
                                >
                                    Start Your Growth Sprint
                                </button>

                                <button 
                                    onClick={() => setIsContactPopupOpen(true)}
                                    className="bg-transparent hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all border border-white/30 backdrop-blur-sm"
                                >
                                    See How We Work
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="w-full mt-6 sm:mt-8 md:mt-12 bg-gradient-to-b from-[#590178] to-[#A502DE] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-center text-center text-white">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center ${stat.value ? "gap-1" : "gap-2 sm:gap-3"}`}
                            >
                                {stat.icon && (
                                    <div 
                                        className="animate-float"
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                            animationDuration: '3s'
                                        }}
                                    >
                                        {stat.icon}
                                    </div>
                                )}
                                {stat.value ? (
                                    <>
                                        <span className="text-2xl sm:text-3xl font-bold">{stat.value}</span>
                                        <span className="[font-family:var(--font-outfit)] font-medium text-base sm:text-lg leading-tight sm:leading-[33.04px] capitalize">
                                            {stat.label}
                                        </span>
                                    </>
                                ) : (
                                    <span className="[font-family:var(--font-outfit)] font-medium text-base sm:text-lg leading-tight sm:leading-[33.04px] capitalize">
                                        {stat.label}
                                    </span>
                                )}
                            </div>
                        ))}
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
};


export default Hero;
