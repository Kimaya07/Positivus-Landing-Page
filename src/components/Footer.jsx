import { useState } from 'react'
import positivusLogo from '../assets/Positivus.png'

const links = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    
        <footer style={{backgroundColor: '#191A23'}} className="rounded-t-[40px] mt-8 max-w-[1240px] mx-auto">
         <div className="px-8 lg:px-[100px] pt-14 pb-8">
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
          >
          {/* The logo */}
            <img
              src={positivusLogo}
              alt="Positivus"
              className="h-8 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
           
            <ul className="flex flex-wrap gap-6 lg:gap-10 list-none">
              {links.map(l => (
                <li key={l}>
                  
                   <a href="#"
                    className="text-white text-[16px] font-normal hover:text-[#B9FF66] transition-colors"
                    style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <svg viewBox="0 0 24 24" fill="#191A23" width="16" height="16">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <svg viewBox="0 0 24 24" fill="#191A23" width="16" height="16">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                <svg viewBox="0 0 24 24" fill="#191A23" width="16" height="16">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sec for Contact & Newsletter */}
          <div
            className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 py-10"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
          >
            {/* Contact */}
            <div className="flex flex-col gap-5">
              <span
                style={{ backgroundColor: '#B9FF66', color: '#191A23' }}
                className="font-medium text-[16px] px-3 py-1 rounded-md w-fit"
              >
                Contact us:
              </span>
              <div className="flex flex-col gap-3">
                <p className="text-white text-[16px]">Email: info@positivus.com</p>
                <p className="text-white text-[16px]">Phone: 555-567-8901</p>
                <p className="text-white text-[16px] leading-relaxed">
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div
              style={{ backgroundColor: '#292A32' }}
              className="rounded-[14px] px-8 py-8 flex flex-col sm:flex-row gap-4 items-center flex-1 max-w-[560px]"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 w-full px-5 py-4 rounded-[14px] bg-transparent text-white text-[16px] placeholder-white focus:outline-none"
                style={{ border: '1px solid rgba(255,255,255,0.5)' }}
              />
              <button
                style={{ backgroundColor: '#B9FF66', color: '#191A23' }}
                className="font-medium text-[16px] px-6 py-4 rounded-[14px] whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Subscribe to news
              </button>
            </div>
          </div>

          {/*COPYRIGHT*/}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-white text-[16px]">© 2023 Positivus. All Rights Reserved.</span>
            
             <a href="#"
              className="text-white text-[16px] hover:text-[#B9FF66] transition-colors"
              style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </footer>
 
  )
}