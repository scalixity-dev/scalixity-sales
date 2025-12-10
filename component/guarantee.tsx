'use client';

const Guarantee = () => {
    return (
        <section className="w-full bg-[#F4F2EF] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 flex flex-col items-center">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-[#171717] mb-3 md:mb-4 leading-tight px-2">
                    “We Guarantee One Thing: Speed Without Compromise.”
                </h2>

                <div className="space-y-2 md:space-y-3 font-outfit text-gray-600 text-base md:text-lg px-2">
                    <p>Your product moves forward every single week.</p>
                    <p>No excuses. No delays. No hand-holding.</p>
                    <p>We operate like your internal team — but faster, smarter, and more reliable.</p>
                </div>
            </div>

            {/* Pill Label */}
            <div className="mb-6 md:mb-8 lg:mb-10">
                <div className="border border-black px-4 md:px-6 py-2 rounded-full bg-transparent shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-bold font-urbanist text-black text-xs md:text-sm tracking-wide">Guarantees</span>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 max-w-5xl mx-auto w-full">
                {/* Card 1: Speed Guarantee */}
                <div className="relative group w-full md:w-[40%]">
                    {/* Shadow Element */}
                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2"></div>
                    {/* Card Content */}
                    <div className="relative h-[380px] sm:h-[420px] md:h-[500px] bg-[#590178] rounded-2xl overflow-hidden flex flex-col justify-between p-6 md:p-8 border-2 border-black">
                        <div className="z-10 mt-2">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-urbanist">Speed Guarantee:</h3>
                            <p className="text-sm sm:text-base text-white/80 font-outfit">Tangible build progress every 7 days</p>
                        </div>

                        {/* Wave Decoration - Bottom */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <svg viewBox="0 0 496 264" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
                                <path d="M11.8532 141.323C-48.3515 158.834 -38.8561 217.841 -23.3395 253.319C-20.4024 260.035 -13.5688 264 -6.23872 264H501.301C510.796 264 519.006 257.363 520.65 248.011C532.828 178.737 541.042 63.7148 492.625 55.0591C427.156 43.3549 447.146 100.142 406.666 100.142C366.185 100.142 393.172 0.873066 315.209 0.00609143C237.246 -0.860884 271.73 91.0385 189.769 134.387C107.808 177.736 95.3134 117.048 11.8532 141.323Z" fill="#C89DFF" fillOpacity="0.2"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Card 2: Ownership Guarantee */}
                <div className="relative group w-full md:w-[30%]">
                    {/* Shadow Element */}
                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2"></div>
                    {/* Card Content */}
                    <div className="relative h-[380px] sm:h-[420px] md:h-[500px] bg-[#E1D0F2] rounded-2xl overflow-hidden flex flex-col border-2 border-black">
                        {/* Wave Decoration - Top */}
                        <div className="absolute top-0 left-0 w-full">
                            <svg width="360" height="251" viewBox="0 0 360 251" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rotate-0" preserveAspectRatio="none">
                                <path d="M-55.1468 109.677C-115.351 92.1658 -105.856 33.1595 -90.3395 -2.31943C-87.4024 -9.03531 -80.5688 -13 -73.2387 -13H434.301C443.796 -13 452.006 -6.36343 453.65 2.98895C465.828 72.2626 474.042 187.285 425.625 195.941C360.156 207.645 380.146 150.858 339.666 150.858C299.185 150.858 326.172 250.127 248.209 250.994C170.246 251.861 204.73 159.962 122.769 116.613C40.808 73.264 28.3134 133.952 -55.1468 109.677Z" fill="#FFFFFE"/>
                            </svg>
                        </div>

                        <div className="z-10 mt-auto p-6 md:p-8 mb-2">
                            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 font-urbanist">Ownership <br /> Guarantee:</h3>
                            <p className="text-sm sm:text-base text-black/80 font-outfit">You never manage us — we run the cycle</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Clarity Guarantee */}
                <div className="relative group w-full md:w-[30%]">
                    {/* Shadow Element */}
                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 md:translate-x-2 md:translate-y-2"></div>
                    {/* Card Content */}
                    <div className="relative h-[380px] sm:h-[420px] md:h-[500px] bg-[#590178] rounded-2xl overflow-hidden flex flex-col justify-start p-6 md:p-8 border-2 border-black">
                        <div className="z-10 mt-2">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-urbanist">Clarity <br /> Guarantee:</h3>
                            <p className="text-sm sm:text-base text-white/80 font-outfit">Zero confusion; transparent roadmap & metrics</p>
                        </div>

                        {/* Wave Decoration - Bottom */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <svg width="360" height="264" viewBox="0 0 360 264" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
                                <path d="M16.8532 141.323C-43.3515 158.834 -33.8561 217.841 -18.3395 253.319C-15.4024 260.035 -8.56879 264 -1.23872 264H506.301C515.796 264 524.006 257.363 525.65 248.011C537.828 178.737 546.042 63.7148 497.625 55.0591C432.156 43.3549 452.146 100.142 411.666 100.142C371.185 100.142 398.172 0.873066 320.209 0.00609143C242.246 -0.860884 276.73 91.0385 194.769 134.387C112.808 177.736 100.313 117.048 16.8532 141.323Z" fill="#6F2093"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Guarantee;
