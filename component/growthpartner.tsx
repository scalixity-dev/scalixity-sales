'use client';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 3v18h18" />
    <path d="M18 9l-5 5-4-4-6 6" />
    <path d="M18 9h-4" />
    <path d="M18 9v4" />
  </svg>
);

const AIIcon = ({ className }: { className?: string }) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <path d="M12 19v3" />
    <path d="M8 22h8" />
    <path d="M18 4l2-2" />
    <path d="M4 4l2-2" />
  </svg>
);

const ProductIcon = ({ className }: { className?: string }) => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="14" width="6" height="7" rx="1" />
    <rect x="15" y="3" width="6" height="18" rx="1" />
    <rect x="9" y="8" width="6" height="13" rx="1" />
  </svg>
);

// Real icon from image looks like curly braces or code tag
const CodeIcon = ({ className }: { className?: string }) => (
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
     <path d="M16 18l6-6-6-6" />
     <path d="M8 6l-6 6 6 6" />
     <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function GrowthPartner() {
  const cards = [
    {
      icon: <GrowthIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Growth Systems Engineering",
      desc: "SaaS, custom software, API/infra, scalable architecture, automation.",
      outcomeLabel: "Outcome:",
      outcome: " Faster revenue, reduced ops cost.",
    },
    {
      icon: <AIIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "AI Transformation Layer",
      desc: "Agents, predictive systems, chatbots, dashboards, workflows.",
      outcomeLabel: "Outcome:",
      outcome: " Cut manual work by 60-80%.",
    },
    {
      icon: <ProductIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Product Acceleration Pod",
      desc: "Plug-in engineering pod for fast execution",
      outcomeLabel: "Outcome:",
      outcome: " Deliver months of work in weeks.",
    },
    {
      icon: <CodeIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Full-Stack DevOps & Infra",
      desc: "CI/CD, security, cost optimisation, cloud deployment.",
      outcomeLabel: "Outcome:",
      outcome: " Scale without breaking.",
    },
  ];

  return (
    <section className="bg-[#E5D9BF] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-[#171717]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-center mb-10 md:mb-12 lg:mb-16 font-bold px-2">
          &ldquo;What You Get As Our Growth Partner&rdquo;
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-[1.12px] border-[#464646] lg:border-t-0">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`
                group relative p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[400px]
                text-black transition-all duration-300 cursor-pointer
                hover:bg-[#5D0076] hover:text-white
                border-b-[1.12px] border-[#464646] lg:border-b-0
                ${index !== 3 ? 'lg:border-r-[1.12px] lg:border-[#464646]' : ''}
                ${index % 2 === 0 ? 'md:border-r-[1.12px] md:border-[#464646] lg:border-r-[1.12px]' : 'md:border-r-0'}
              `}
            >
              <div>
                <div className="mb-3 sm:mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                    {card.icon}
                </div>
                <h3 className="text-xl sm:text-xl md:text-2xl font-playfair mb-4 sm:mb-5 md:mb-6 leading-tight font-medium">
                  {card.title}
                </h3>
                
                <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-sm leading-relaxed text-gray-800 group-hover:text-gray-200 transition-colors duration-300">
                  {card.desc}
                </p>
                
                <div className="mt-auto">
                    <p className="text-xs sm:text-sm">
                        <span className="font-bold">{card.outcomeLabel}</span>
                        {card.outcome}
                    </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-7 md:bottom-8 md:right-8">
                <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
