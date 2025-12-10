'use client';

import { useState, useRef, useEffect } from 'react';

const ScalixityBlends = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // No default hover
    const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
    const [linePosition, setLinePosition] = useState({ left: '20%', width: '20%' });
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Top status bar items
    const topItems = [
        { label: "Speed", icon: <SpeedIcon /> },
        { label: "Authority", icon: <AuthorityIcon />, active: true },
        { label: "Not outsourcing", icon: <GlobeIcon /> },
        { label: "UK credibility stamp", icon: <StampIcon /> },
        { label: "Outcome-based promise", icon: <ClipboardIcon /> },
    ];

    const calculateLinePosition = (index: number) => {
        const item = itemRefs.current[index];
        const container = containerRef.current;
        if (!item || !container) return { left: '20%', width: '20%' };

        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        
        const left = ((itemRect.left - containerRect.left) / containerRect.width) * 100;
        const width = (itemRect.width / containerRect.width) * 100;
        
        return { left: `${left}%`, width: `${width}%` };
    };

    useEffect(() => {
        if (hoveredIndex !== null) {
            // Small delay to ensure DOM is updated
            const timer = setTimeout(() => {
                setLinePosition(calculateLinePosition(hoveredIndex));
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [hoveredIndex]);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        // Calculate immediately for better responsiveness
        requestAnimationFrame(() => {
            setLinePosition(calculateLinePosition(index));
        });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); // Hide line on leave
    };

    // Main content comparison points
    const comparisonPoints = [
        "Most teams hire developers expecting growth.",
        "Developers write code.",
        "We engineer outcomes",
    ];

    // Card items
    const cardItems = [
        "Consulting-level thinking",
        "AI-first engineering",
        "Automation & systems design",
        "Speed-focused product execution",
    ];

    // Bottom steps
    const steps = [
        { label: "Strategy" },
        { label: "Architecture" },
        { label: "Engineering" },
        { label: "AI Automation" },
        { label: "Deployment" },
        { label: "Iteration" },
        { label: "Growth Acceleration" },
    ];

    return (
        <section className="bg-[#E5D9BF] min-h-screen py-6 sm:py-10 px-4 sm:px-6 md:px-12 flex flex-col items-center">
            {/* Top Navigation / Status Bar */}
            <div ref={containerRef} className="w-full max-w-7xl mb-12 relative">
                {/* Gray Line - hidden on mobile due to wrapping issues */}
                <div className="hidden lg:block absolute top-[3px] left-0 w-full h-[5px] bg-gray-400/30 rounded-full" />

                {/* Purple Active Line - dynamically positioned, only shown on hover */}
                {hoveredIndex !== null && (
                    <div 
                        className="hidden lg:block absolute top-[3px] h-[5px] bg-[#75079C] rounded-full z-10 transition-all duration-300 ease-out"
                        style={{
                            left: linePosition.left,
                            width: linePosition.width,
                        }}
                    />
                )}

                {/* Mobile/Tablet: Grid Layout, Desktop: Flex Layout */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-wrap lg:justify-between lg:items-center lg:gap-6 pt-4 lg:pt-6 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold tracking-tight text-[#2e2e2e]">
                    {topItems.map((item, index) => (
                        <div 
                            key={index}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`flex items-center gap-2 cursor-pointer transition-colors ${hoveredIndex === index ? 'text-black' : 'text-black'}`}
                        >
                            <div className="shrink-0">
                                {item.icon}
                            </div>
                            <span className="whitespace-nowrap">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-20 md: items-center">

                {/* Left Side: Text */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    <h2 className="[font-family:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl leading-[1.2] text-[#1A1A1A]">
                        &quot;You Don&apos;t Need a Developer Team. You Need a Growth Engineering Partner.&quot;
                    </h2>

                    <div className="space-y-3 sm:space-y-4">
                        {comparisonPoints.map((point, i) => (
                            <div key={i} className="flex items-center gap-3 sm:gap-4">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#590178] flex items-center justify-center shrink-0 border-[1.12px] border-solid border-[#CECECE] shadow-[2.99px_2.99px_0px_0px_#AE9393]">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[14px] sm:h-[14px]">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                                <p className="text-base sm:text-lg font-medium text-black tracking-tight">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Card */}
                <div className="relative mt-16 sm:mt-20 md:mt-40">
                    {/* Label above card */}
                    <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-[#EAE2D6] border-2 border-black rounded-xl px-4 sm:px-6 py-1.5 sm:py-2 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="[font-family:var(--font-playfair)] text-lg sm:text-xl md:text-2xl font-semibold text-black whitespace-nowrap">Scalixity blends:</span>
                    </div>

                    {/* Main Purple Card */}
                    <div className="bg-[#E1D0F2] mt-8 sm:mt-12 border-[3px] border-black rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10 w-full max-w-md mx-auto md:mr-auto md:ml-0">
                        <div className="flex flex-col gap-4 sm:gap-6">
                            {cardItems.map((item, idx) => (
                                <p key={idx} className="text-base sm:text-lg md:text-xl font-medium text-black tracking-tight">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full max-w-5xl py-6 sm:py-10 text-center px-2">
                <h3 className="[font-family:var(--font-playfair)] text-2xl sm:text-3xl md:text-[42px] font-semibold text-[#1A1A1A] mb-2 sm:mb-3 leading-tight">
                    Full-Stack Growth Engineering Partner (FGEP)
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#2e2e2e] mb-6 sm:mb-8">A partner responsible for</p>

                {/* Steps Pill */}
                <div className="inline-flex flex-wrap justify-center bg-[#A502DE] rounded-full p-3 sm:p-4 gap-1.5 sm:gap-2 shadow-xl w-full md:w-auto">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredStepIndex(idx)}
                            onMouseLeave={() => setHoveredStepIndex(null)}
                            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-[13px] font-medium transition-colors cursor-default
                                ${hoveredStepIndex === idx
                                    ? 'bg-[#FF9F43] text-white shadow-sm'
                                    : 'text-white/80'
                                }`}
                        >
                            {step.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SVG Icons ---

const SpeedIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const AuthorityIcon = () => (
    <svg width="27" height="20" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 sm:w-[27px] sm:h-5">
        <path d="M13.125 0L0 5.83333V14.5833C0 22.6771 5.6 30.2458 13.125 32.0833C20.65 30.2458 26.25 22.6771 26.25 14.5833V5.83333L13.125 0ZM13.125 16.0271H23.3333C22.5604 22.0354 18.55 27.3875 13.125 29.0646V16.0417H2.91667V7.72917L13.125 3.19375V16.0271Z" fill="currentColor"/>
    </svg>
);

const GlobeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

const StampIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M19 4v16H5V4" />
        <path d="M10 2h4" />
        <path d="M5 20h14" />
        <path d="M12 16v-6" />
        <path d="M8 10h8" />
    </svg>
);

const ClipboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
    </svg>
);

export default ScalixityBlends;
