import { useState } from 'react'
import positivusLogo from '../assets/Positivus.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center py-8 lg:py-10 relative">

      <img src={positivusLogo} alt="Positivus" className="h-8 lg:h-[36px] w-auto" />

      <div className="hidden lg:flex items-center gap-10">
        {['About us','Services','Use Cases','Pricing','Blog'].map(l => (
          <a key={l} href="#" className="text-positivus-dark text-base font-normal hover:text-positivus-green transition-colors no-underline">
            {l}
          </a>
        ))}
        <button className="border border-positivus-dark rounded-[14px] px-7 py-3 text-base font-normal text-positivus-dark hover:bg-positivus-dark hover:text-white transition-all">
          Request a quote
        </button>
      </div>

      {/* Hamburger */}
      <button className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className={`w-6 h-[2px] bg-positivus-dark block transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-6 h-[2px] bg-positivus-dark block transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-[2px] bg-positivus-dark block transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-positivus-dark py-8 flex flex-col items-center gap-6 z-50 rounded-2xl">
          {['About us','Services','Use Cases','Pricing','Blog'].map(l => (
            <a key={l} href="#" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium hover:text-positivus-green no-underline">
              {l}
            </a>
          ))}
        <button className="border-2 border-positivus-green text-positivus-green rounded-xl px-8 py-3 text-base font-medium mt-2 hover:bg-positivus-green hover:text-positivus-dark transition-colors duration-300">
            Request a quote
        </button>
        </div>
      )}
    </nav>
  )
}