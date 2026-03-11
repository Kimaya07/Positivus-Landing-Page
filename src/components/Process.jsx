import { useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    body: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    num: '02',
    title: 'Research and Strategy Development',
    body: "We conduct deep market research to identify opportunities and create a comprehensive roadmap tailored specifically for your brand's growth.",
  },
]

function AccordionItem({ num, title, body, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        backgroundColor: isOpen ? '#B9FF66' : '#F3F3F3',
        border: '1px solid #191A23',
        boxShadow: '0 5px 0 #191A23',
      }}
      className="rounded-[30px] lg:rounded-[40px] px-8 lg:px-12 cursor-pointer transition-colors duration-300"
    >
      {/* Body shown above divider when open */}
      {isOpen && (
        <>
          <div className="pt-8 pb-6">
            <p style={{ color: '#191A23' }} className="text-[16px] lg:text-[18px] leading-relaxed max-w-4xl">
              {body}
            </p>
          </div>
          <div style={{ borderTop: '1px solid #191A23' }} className="w-full" />
        </>
      )}

      {/* Number + Title row */}
      <div className="flex items-center justify-between py-7 lg:py-8">
        <div className="flex items-center gap-6 lg:gap-8">
          <span style={{ color: '#191A23' }} className="text-[36px] lg:text-[48px] font-medium leading-none">
            {num}
          </span>
          <span style={{ color: '#191A23' }} className="text-[18px] lg:text-[24px] font-medium">
            {title}
          </span>
        </div>

        {/* +/- button */}
        <div
          style={{ border: '1px solid #191A23', backgroundColor: '#ffffff' }}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#191A23" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#191A23" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="mb-16 lg:mb-[100px] w-full" id="process">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 mb-10 lg:mb-16">
        <h2
          style={{ backgroundColor: '#B9FF66', color: '#191A23' }}
          className="text-[32px] lg:text-[40px] font-medium px-3 py-1 rounded-lg shrink-0"
        >
          Our Working Process
        </h2>
        <p style={{ color: '#191A23' }} className="text-[16px] lg:text-[18px] leading-relaxed max-w-[320px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:gap-5">
        {steps.map((s, i) => (
          <AccordionItem
            key={i}
            {...s}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}