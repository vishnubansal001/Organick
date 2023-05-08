import React from "react";

const Hero = ({ ifExists, heroSection: { heading, img } }) => {
  return (
    <>
      <section
        className="bg-cover bg-center flex select-none flex-col"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className={`flex items-center justify-center ${
            ifExists ? "lg:py-14 md:py-12 py-10" : "lg:py-16 md:py-10 py-8"
          }`}
        >
          <div className="flex items-center md:flex-row flex-col w-[90%] justify-center">
            <p
              className={`font-bold text-[#274C5B] ${
                ifExists
                  ? "lg:text-4xl md:text-3xl text-xl "
                  : "lg:text-6xl md:text-4xl text-2xl"
              }`}
            >
              {heading}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
