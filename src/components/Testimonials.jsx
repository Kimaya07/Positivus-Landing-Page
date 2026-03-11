import { useState, useRef } from 'react';

const testimonialsData = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp"
  },
  {
    id: 2,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp"
  },
  {
    id: 3,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp"
  },
  {
    id: 4,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Sarah Johnson",
    title: "CEO at GrowthTech"
  },
  {
    id: 5,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Michael Chen",
    title: "Founder at ShopBright"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToCard = (index) => {
    const clamped = Math.max(0, Math.min(index, testimonialsData.length - 1));
    setActiveIndex(clamped);
    if (!sliderRef.current) return;
    const children = Array.from(sliderRef.current.children);
    if (children[clamped]) {
      children[clamped].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <section className="mb-20 w-full">

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 mb-10 lg:mb-16">
        <h2
          style={{ backgroundColor: '#B9FF66', color: '#191A23' }}
          className="text-[32px] lg:text-[40px] font-medium px-3 py-1 rounded-md inline-block shrink-0"
        >
          Testimonials
        </h2>
        <p style={{ color: '#191A23' }} className="text-[16px] lg:text-[18px] leading-relaxed max-w-[450px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Dark Container */}
      <div
        style={{ backgroundColor: '#191A23' }}
        className="rounded-[40px] py-14 lg:py-20 overflow-hidden px-1"
      >
        {/* Scrollable track */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 lg:gap-10 pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: 'calc(50% - 280px)',
            paddingRight: 'calc(50% - 280px)',
          }}
        >
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[80vw] lg:w-[560px] flex flex-col"
            >
              {/* Speech bubble */}
              <div
                className="relative p-7 lg:p-10 rounded-[28px]"
                style={{ border: '1px solid #B9FF66' }}
              >
                <p className="text-white text-[15px] lg:text-[16px] leading-[1.8]">
                  "{t.text}"
                </p>

                {/* Triangle pointer */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-11px',
                    left: '52px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#191A23',
                    border: '1px solid #B9FF66',
                    borderTop: 'none',
                    borderLeft: 'none',
                    transform: 'rotate(45deg)',
                  }}
                />
              </div>

              {/* Author */}
              <div className="mt-10 ml-10 mb-2">
                <p style={{ color: '#B9FF66' }} className="font-medium text-[16px] lg:text-[18px]">
                  {t.name}
                </p>
                <p className="text-white text-[14px] lg:text-[15px] mt-1 opacity-80">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 lg:gap-12 mt-10 px-6">

          {/* Left arrow */}
          <button
            onClick={() => scrollToCard(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="text-3xl bg-transparent border-none transition-colors"
            style={{ color: activeIndex === 0 ? '#555' : '#ffffff', cursor: activeIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            ←
          </button>

          {/* Star dots */}
          <div className="flex items-center gap-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className="bg-transparent border-none cursor-pointer p-0"
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: index === activeIndex ? '#B9FF66' : '#ffffff',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    transition: 'background-color 0.3s',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollToCard(activeIndex + 1)}
            disabled={activeIndex === testimonialsData.length - 1}
            className="text-3xl bg-transparent border-none transition-colors"
            style={{ color: activeIndex === testimonialsData.length - 1 ? '#555' : '#ffffff', cursor: activeIndex === testimonialsData.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            →
          </button>

        </div>
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default Testimonials;