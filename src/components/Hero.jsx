import heroImage from '../assets/HeroImg.png'; 

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-6 lg:mt-8 mb-20 gap-10">
      
      <div className="w-full md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
        
        <h1
          style={{ color: '#191A23' }}
          className="text-5xl lg:text-[60px] font-medium leading-[1.1] max-w-[550px]"
        >
          Navigating the digital landscape for success
        </h1>
        
        <div className="md:hidden flex justify-center w-full my-4">
          <img src={heroImage} alt="Digital Marketing" className="w-full max-w-[350px]" />
        </div>

        <p
          style={{ color: '#191A23' }}
          className="text-lg lg:text-[20px] max-w-[500px] leading-relaxed"
        >
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        
        <button
          style={{ backgroundColor: '#191A23', color: '#ffffff' }}
          className="rounded-[14px] px-8 py-4 lg:px-10 lg:py-[22px] w-full md:w-auto self-start text-lg lg:text-xl font-medium mt-2 hover:opacity-80 transition-opacity"
        >
          Book a consultation
        </button>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 justify-end order-1 md:order-2">
        <img src={heroImage} alt="Digital Marketing Megaphone" className="w-full max-w-[600px] object-contain" />
      </div>

    </section>
  );
};

export default Hero;