'use client';

const WhyChooseUs = () => {
    const leftColumnPoints = [
        "UK-registered + India engineering excellence",
        "We don't bill hours. We deliver outcomes.",
        "We think like co-founders, not vendors.",
        "We use AI to compress timelines massively.",
    ];

    const rightColumnPoints = [
        "You get a strategist + architect, not just developers.",
        "We provide CTO-level clarity without CTO-level cost.",
        "You get weekly product releases, not monthly updates.",
    ];

    return (
        <section className="w-full bg-[#E5D9BF] py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-8xl">
                {/* Light purple-grey panel with rounded corners */}
                <div className="bg-[#C89DFF33] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16">
                    {/* Title */}
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-black mb-8 md:mb-10 lg:mb-12 leading-tight px-2">
                        &ldquo;Why Founders Choose Us Over 93% of Agencies&rdquo;
                    </h2>

                    {/* Two column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 px-2 md:p-6 lg:p-10">
                        {/* Left Column */}
                        <div className="space-y-3 md:space-y-4">
                            {leftColumnPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#590178] hover:bg-white rounded-full px-3 md:px-4 py-3 md:py-4 flex items-center gap-2 md:gap-3 border-[1.31px] border-white transition-colors duration-300 cursor-pointer"
                                >
                                    {/* Light purple-grey circle bullet with white inner circle */}
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#C89DFF] hover:bg-[#590178] rounded-full shrink-0 flex items-center justify-center">
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                                    </div>
                                    
                                    {/* Text */}
                                    <span className="text-[#E1D0F2] group-hover:text-black font-urbanist text-xs sm:text-sm md:text-base flex-1 transition-colors duration-300">
                                        {point}
                                    </span>
                                    
                                    {/* Arrow icon (rightward-pointing with curved shaft - return/enter key style) */}
                                    <svg
                                        width="18"
                                        height="13"
                                        viewBox="0 0 20 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0 stroke-[#E1D0F2] group-hover:stroke-black transition-colors duration-300 w-[16px] h-[12px] md:w-[20px] md:h-[14px]"
                                    >
                                        <path
                                            d="M14.9966 12.4212L19.2994 8.49869L14.9966 4.57617"
                                            strokeWidth="1.30751"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M0.653809 0.653809V3.26882C0.653809 4.65591 1.25825 5.98619 2.33416 6.96701C3.41008 7.94783 4.86933 8.49885 6.3909 8.49885H19.2994"
                                            strokeWidth="1.30751"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-3 md:space-y-4">
                            {rightColumnPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#590178] hover:bg-white rounded-full px-3 md:px-4 py-3 md:py-4 flex items-center gap-2 md:gap-3 border-[1.31px] border-white transition-colors duration-300 cursor-pointer"
                                >
                                    {/* Light purple-grey circle bullet with white inner circle */}
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#C89DFF] hover:bg-[#590178] rounded-full shrink-0 flex items-center justify-center">
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                                    </div>
                                    
                                    {/* Text */}
                                    <span className="text-[#E1D0F2] group-hover:text-black font-urbanist text-xs sm:text-sm md:text-base flex-1 transition-colors duration-300">
                                        {point}
                                    </span>
                                    
                                    {/* Arrow icon (rightward-pointing with curved shaft - return/enter key style) */}
                                    <svg
                                        width="18"
                                        height="13"
                                        viewBox="0 0 20 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0 stroke-[#E1D0F2] group-hover:stroke-black transition-colors duration-300 w-[16px] h-[12px] md:w-[20px] md:h-[14px]"
                                    >
                                        <path
                                            d="M14.9966 12.4212L19.2994 8.49869L14.9966 4.57617"
                                            strokeWidth="1.30751"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M0.653809 0.653809V3.26882C0.653809 4.65591 1.25825 5.98619 2.33416 6.96701C3.41008 7.94783 4.86933 8.49885 6.3909 8.49885H19.2994"
                                            strokeWidth="1.30751"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

