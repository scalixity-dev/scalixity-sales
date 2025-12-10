'use client';

const ProcessBuilt = () => {
    const steps = [
        {
            number: 1,
            title: "Understand Your Goals",
            description: "Short, high-intensity discovery session.",
            isActive: true,
        },
        {
            number: 2,
            title: "Understand Your Goals",
            description: "Architecture + AI layers + automation mapping",
            isActive: false,
        },
        {
            number: 3,
            title: "Build at Hyper Speed",
            description: "Parallel sprint cycles + weekly releases.",
            isActive: false,
        },
        {
            number: 4,
            title: "Scale & Optimise",
            description: "Continuous shipping + performance tracking.",
            isActive: false,
        },
    ];

    const results = [
        { number: 1, text: "58% average timeline compression" },
        { number: 2, text: "30-60% cost reduction" },
        { number: 3, text: "97% delivery accuracy" },
        { number: 4, text: "Products deployed across 4 continents" },
        { number: 5, text: "Trusted by startups, D2C, enterprise, and SaaS founders" },
    ];

    return (
        <section className="w-full bg-[#E5D9BF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center">
            <div className="w-full max-w-8xl space-y-12 sm:space-y-16 lg:space-y-20">
                {/* Top Section: Process */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-playfair text-black font-bold leading-tight px-2">
                        &ldquo;A Process Built for 2025, Not 2015.&rdquo;
                    </h2>

                    {/* Steps Container */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-28 py-4 md:py-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center flex-1 relative w-full md:w-auto">
                                {/* Connector Line (curving arc - upward for 1-2, downward for 2-3, upward for 3-4) */}
                                {index < steps.length - 1 && (
                                    <div className={`hidden md:block absolute left-[calc(75%+24px)] w-[calc(100%-56px)] h-12 z-0 pointer-events-none ${
                                        index === 1 ? 'top-[10px]' : 'top-0'
                                    }`}>
                                        <svg 
                                            width="100%" 
                                            height="100%" 
                                            viewBox="0 0 100 16" 
                                            preserveAspectRatio="none"
                                            style={{ overflow: 'visible' }}
                                        >
                                            <path
                                                d={
                                                    index === 0 
                                                        ? "M 0 8 Q 50 -4 100 8"  // More pronounced upward curve for 1-2
                                                        : index === 1 
                                                        ? "M 0 8 Q 50 20 100 8"  // More pronounced downward curve for 2-3
                                                        : "M 0 8 Q 50 -6 100 8"  // More pronounced upward curve for 3-4
                                                }
                                                stroke="#B479D9"
                                                strokeWidth="0.5"
                                                strokeDasharray="4 3"
                                                fill="none"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {/* Step Circle */}
                                <div 
                                    className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white border-2 border-[#590178] hover:bg-[#590178] transition-colors duration-200 group animate-float`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <span className={`text-lg sm:text-xl font-normal font-urbanist text-[#590178] group-hover:text-white transition-colors duration-200`}>
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step Content */}
                                <div className="mt-4 sm:mt-6 text-center space-y-1.5 sm:space-y-2 w-full px-2 max-w-xs mx-auto">
                                    <h3 className="font-urbanist text-black text-sm sm:text-base font-bold leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="font-plus-jakarta-sans text-[#585858] text-xs sm:text-sm font-normal leading-tight tracking-tight">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Results */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12 w-full">
                    <h2 className="text-left text-2xl sm:text-3xl lg:text-4xl font-playfair text-black font-bold leading-tight px-2">
                        &ldquo;The Results Speak.&rdquo;
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12 w-full">
                        {results.map((result) => (
                            <div 
                                key={result.number} 
                                className="flex flex-col group cursor-pointer transition-all duration-150 ease-out hover:bg-gradient-to-b hover:from-[#590178] hover:to-[#B04AD4] rounded-lg"
                            >
                                <div className="w-full h-px bg-[#000000]/20 group-hover:bg-white/30 transition-colors duration-150 ease-out" />
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 py-3 sm:py-4 px-3 sm:px-4">
                                    <span 
                                        className="result-number font-playfair text-3xl sm:text-4xl font-bold tracking-wide mb-2 text-transparent transition-all duration-150 ease-out flex-shrink-0"
                                        style={{ WebkitTextStroke: '1px #702F8A' }}
                                    >
                                        {String(result.number).padStart(2, '0')}.
                                    </span>
                                    <p className="font-playfair text-[#0D0C0C] text-base sm:text-lg md:text-xl lg:text-2xl font-medium group-hover:text-white transition-colors duration-150 ease-out">
                                        {result.text}
                                    </p>
                                </div>
                                <div className="w-full h-px bg-[#000000]/20 group-hover:bg-white/30 transition-colors duration-150 ease-out" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessBuilt;

