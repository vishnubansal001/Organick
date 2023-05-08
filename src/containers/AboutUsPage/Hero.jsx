import React from "react";

const Hero = ({ heroSection: { heading, img } }) => {
  return (
    <>
      <section
        className="bg-cover bg-center flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex items-center justify-center lg:py-16 md:py-10 py-8">
          <div className="flex items-center md:flex-row flex-col w-[90%] justify-center lg:gap-8 md:gap-6 gap-4">
            <p className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#274C5B] ">
              {heading}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
