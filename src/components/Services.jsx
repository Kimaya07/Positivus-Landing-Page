import searchEngineImg from '../assets/Search-Engine.png';
import ppcImg from '../assets/Pay-Per-Click.png';

const ServiceCard = ({ titleLine1, titleLine2, image, bgColor, titleBg, titleText }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, border: '1px solid #191A23', boxShadow: '0 6px 0 #191A23' }}
      className="rounded-[40px] p-8 lg:p-[50px] flex flex-col md:flex-row justify-between gap-12 md:gap-0"
    >
      {/* Left */}
      <div className="flex flex-col h-full justify-between w-full md:w-1/2">
        <div className="flex flex-col items-start gap-1">
          <span
            style={{ backgroundColor: titleBg, color: titleText }}
            className="text-[26px] lg:text-[30px] font-medium px-2 py-0.5 rounded-md leading-snug"
          >
            {titleLine1}
          </span>
          <span
            style={{ backgroundColor: titleBg, color: titleText }}
            className="text-[26px] lg:text-[30px] font-medium px-2 py-0.5 rounded-md leading-snug"
          >
            {titleLine2}
          </span>
        </div>

        {/* Learn more — desktop */}
        <div className="hidden md:flex items-center gap-4 cursor-pointer group w-max mt-24">
          <div
            style={{ backgroundColor: '#191A23' }}
            className="w-[41px] h-[41px] rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform flex-shrink-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#B9FF66" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
          <span style={{ color: '#191A23' }} className="font-medium text-[20px]">Learn more</span>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex flex-row justify-between items-end md:justify-end">
        {/* Learn more — mobile */}
        <div
          style={{ backgroundColor: '#191A23' }}
          className="md:hidden w-[41px] h-[41px] rounded-full flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#B9FF66" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
        <img src={image} alt={titleLine1} className="w-[160px] md:w-full max-w-[210px] object-contain" />
      </div>
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    titleLine1: 'Search engine',
    titleLine2: 'optimization',
    image: searchEngineImg,
    bgColor: '#F3F3F3',
    titleBg: '#B9FF66',
    titleText: '#191A23',
  },
  {
    id: 2,
    titleLine1: 'Pay-per-click',
    titleLine2: 'advertising',
    image: ppcImg,
    bgColor: '#B9FF66',
    titleBg: '#ffffff',
    titleText: '#191A23',
  },
];

const Services = () => {
  return (
    <section className="mb-20 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-10 lg:mb-20 text-center lg:text-left">
        <h2
          style={{ backgroundColor: '#B9FF66', color: '#191A23' }}
          className="text-[36px] lg:text-[40px] font-medium px-3 py-1 rounded-md inline-block"
        >
          Services
        </h2>
        <p style={{ color: '#191A23' }} className="max-w-[580px] text-base lg:text-lg leading-relaxed">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;