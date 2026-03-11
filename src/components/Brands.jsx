import Amazon from '../assets/Amazon.png'
import Dribble from '../assets/Dribble.png'
import Hubspot from '../assets/Hubspot.png'
import Notion from '../assets/Notion.png'
import Netflix from '../assets/Netflix.png'
import Zoom from '../assets/Zoom.png'

const logos = [
  { src: Amazon, alt: 'Amazon' },
  { src: Dribble, alt: 'Dribbble' },
  { src: Hubspot, alt: 'HubSpot' },
  { src: Notion, alt: 'Notion' },
  { src: Netflix, alt: 'Netflix' },
  { src: Zoom, alt: 'Zoom' },
]

export default function Brands() {
  return (
    <div className="border-gray-200 py-8 lg:py-10 mb-16 lg:mb-[70px] overflow-hidden">

      <div className="hidden lg:flex justify-between items-center gap-6">
        {logos.map(logo => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-8 lg:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        ))}
      </div>

      {/* Marquee for mobile view */}
      <div className="lg:hidden relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {/* Rendered twice for loop */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain grayscale opacity-70 inline-block flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}