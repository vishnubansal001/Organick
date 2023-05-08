import React from "react";
import changelog from "../../assets/changelog.png";

const HeroSection = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center lg:w-auto md:w-auto w-[90%] mx-auto md:flex-row flex-col bg-gray-100 px-5 py-6 rounded-[20px] shadow-md hover:shadow-xl transition duration-300 ease-in-out justify-center lg:gap-8 md:gap-6 gap-4">
            <div>
              <img src={changelog} alt="" />
            </div>
            <p className="lg:text-xl md:text-lg text-base text-[#525C60]">
              <span className="font-bold lg:text-3xl md:text-2xl text-xl text-[#274C5B]">
                V.1
              </span>{" "}
              Initial Organick Webflow Template Release
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
