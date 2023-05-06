import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center flex select-none min-h-screen h-full p-3 relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex items-center w-full p-6 sm:p-12 lg:p-16">
          <div className="lg:w-[85%%] md:w-[90%] w-[95%] mx-auto flex flex-col justify-center lg:gap-6 md:gap-4 gap-3">
            <div className="flex flex-col justify-center gap-2">
              <div>
                <h1 className="italic text-[#68A47F] lg:text-2xl md:text-lg text-base font-semibold">
                  100% Natural Food
                </h1>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#274C5B] ">
                  Choose the best
                </h1>
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#274C5B] ">
                  healthier way
                </h1>
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-[#274C5B] ">
                  of life
                </h1>
              </div>
            </div>
            <div>
              <button className="px-4 py-3 bg-[#EFD372] rounded-[14px] text-[#274C5B] font-bold lg:text-lg md:text-base text-sm shadow-md hover:scale-[1.05] transition ease-in-out duration-300 hover:shadow-lg">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
