'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// PDF configuration - Add more PDFs here
interface PdfResource {
    id: string;
    path: string;
    previewImage: string; // Path to the preview image (first page screenshot)
    title: string;
    description: string;
}

const PDF_RESOURCES: PdfResource[] = [
    {
        id: 'scalixity',
        path: '/ppt-scalixity.pdf',
        previewImage: '/pdf1.png',
        title: 'Scalixity Presentation',
        description: 'Comprehensive presentation about Scalixity\'s services and solutions'
    },
    {
        id: 'scalixity-overview',
        path: '/ppt-scalixity.pdf',
        previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        title: 'Scalixity Overview',
        description: 'An overview of Scalixity\'s innovative approach to business solutions and digital transformation'
    },
    {
        id: 'scalixity-details',
        path: '/ppt-scalixity.pdf',
        previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        title: 'Scalixity Detailed Guide',
        description: 'Detailed guide covering all aspects of Scalixity\'s platform, features, and implementation strategies'
    },
];

const DownloadIcon = ({ size = 32 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);


export default function Resource() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const selectedPdf = PDF_RESOURCES[currentIndex];

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
    };

    // Auto-play carousel
    useEffect(() => {
        if (PDF_RESOURCES.length <= 1) return;

        const startAutoPlay = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            
            intervalRef.current = setInterval(() => {
                if (!isPaused) {
                    setCurrentIndex((prev) => (prev + 1) % PDF_RESOURCES.length);
                }
            }, 2000); // Change slide every 3 seconds
        };

        startAutoPlay();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    return (
        <section className="bg-[#E5D9BF] py-10 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                    {/* Left: PDF Carousel - order-2 on mobile (after description), order-1 on desktop (left side) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center mt-0 md:mt-8 lg:mt-16 order-2 lg:order-1">
                        <div className="relative w-full">
                            {/* Carousel Container */}
                            <div 
                                className="relative bg-gray-100 rounded-lg md:rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_#590178] md:shadow-[4px_4px_0px_0px_#590178] border-2 border-[#590178]/20"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* Carousel Items */}
                                <div className="relative aspect-video md:aspect-18/10">
                                    {PDF_RESOURCES.map((pdf, index) => (
                                        <div
                                            key={pdf.id}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                                index === currentIndex 
                                                    ? 'opacity-100 z-10 scale-100 translate-x-0' 
                                                    : 'opacity-0 z-0 scale-105 translate-x-4'
                                            }`}
                                        >
                                            <div className="relative w-full h-full group cursor-pointer">
                                                <Image 
                                                    src={pdf.previewImage} 
                                                    alt={`${pdf.title} - Preview`}
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                                />
                                                {/* Hover Overlay with Download Icon */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                                    <a
                                                        href={pdf.path}
                                                        download
                                                        onClick={handleDownload}
                                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#590178] text-white p-3 md:p-4 rounded-full hover:bg-[#4a005e] shadow-lg scale-90 group-hover:scale-100"
                                                        aria-label={`Download ${pdf.title}`}
                                                    >
                                                        <DownloadIcon size={28} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Indicators */}
                            {PDF_RESOURCES.length > 1 && (
                                <div className="flex justify-center gap-2 mt-4 md:mt-6">
                                    {PDF_RESOURCES.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`transition-all duration-500 ease-in-out rounded-full ${
                                                index === currentIndex
                                                    ? 'w-6 md:w-8 h-2.5 md:h-3 bg-[#590178] scale-110 shadow-lg'
                                                    : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-[#590178]/30 hover:bg-[#590178]/50 hover:scale-110'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right: Content - order-1 on mobile (before carousel), order-2 on desktop (right side) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1 lg:order-2">
                        <div className="inline-block bg-[#F4F2EF] border border-black/80 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[#590178] font-medium text-xs md:text-sm tracking-wide uppercase font-manrope">
                                Resource Center
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#0D0C0C] leading-tight mb-4 md:mb-6">
                            Discover Scalixity&apos;s<br />
                            <span className="text-[#590178]">Full Potential</span>
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 font-urbanist leading-relaxed mb-6 max-w-xl">
                            {selectedPdf.description}
                        </p>

                        {/* Download Button - Hidden on mobile/tablet (below carousel), shown on desktop */}
                        <a
                            href={selectedPdf.path}
                            download
                            onClick={handleDownload}
                            className="hidden lg:inline-flex group items-center gap-2 md:gap-3 bg-[#590178] text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#4a005e] transition-all shadow-[3px_3px_0px_0px_#0D0C0C] md:shadow-[4px_4px_0px_0px_#0D0C0C] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0D0C0C] font-manrope"
                        >
                            <span className="truncate">Download {selectedPdf.title}</span>
                            <div className="group-hover:translate-y-1 transition-transform duration-300 flex-shrink-0">
                                <DownloadIcon size={18} />
                            </div>
                        </a>
                    </div>

                    {/* Download Button for Mobile/Tablet - order-3 (after carousel) */}
                    <div className="w-full lg:hidden flex flex-col items-start text-left order-3">
                        <a
                            href={selectedPdf.path}
                            download
                            onClick={handleDownload}
                            className="group inline-flex items-center gap-2 md:gap-3 bg-[#590178] text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#4a005e] transition-all shadow-[3px_3px_0px_0px_#0D0C0C] md:shadow-[4px_4px_0px_0px_#0D0C0C] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0D0C0C] font-manrope"
                        >
                            <span className="truncate">Download {selectedPdf.title}</span>
                            <div className="group-hover:translate-y-1 transition-transform duration-300 flex-shrink-0">
                                <DownloadIcon size={18} />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
